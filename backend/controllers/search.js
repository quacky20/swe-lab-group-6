const Book = require('../models/book')
const asyncWrapper = require('../middleware/async')

const searchBooks = asyncWrapper(async (req, res) => {
    const { q, subject, year, page = 1, limit = 12 } = req.query

    if (!q) {
        return res.status(400).json({ message: "Query is required" })
    }

    const pageNum = parseInt(page)
    const limitNum = parseInt(limit)
    const skip = (pageNum - 1) * limitNum

    const pipeline = [
        {
            $search: {
                index: "partial-match",
                compound: {
                    should: [
                        {
                            text: {
                                query: q,
                                path: "title",
                                score: { boost: { value: 10 } }
                            }
                        },
                        {
                            autocomplete: {
                                query: q,
                                path: "title",
                                score: { boost: { value: 3 } }

                            }
                        },
                        {
                            autocomplete: {
                                query: q,
                                path: "authors",
                            }
                        },
                    ],
                },
            }
        }
    ]

    if (subject || year) {
        pipeline.push({
            $match: {
                ...(subject && { subject }),
                ...(year && { year: Number(year) })
            }
        })
    }

    // pipeline.push({ $skip: skip })
    // pipeline.push({ $limit: limitNum })
    // pipeline.push({
    //     $project: {
    //         title: 1,
    //         authors: 1,
    //         year: 1,
    //         subject: 1,
    //         score: { $meta: "searchScore" }
    //     }
    // })

    pipeline.push({
        $facet: {
            results: [
                { $skip: skip },
                { $limit: limitNum },
                {
                    $project: {
                        title: 1,
                        authors: 1,
                        year: 1,
                        subject: 1,
                        score: { $meta: "searchScore" }
                    }
                }
            ],
            totalCount: [
                { $count: "count" }
            ]
        }
    })

    const data = await Book.aggregate(pipeline)

    res.status(200).json({
        page: pageNum,
        limit: limitNum,
        totalCount: data[0].totalCount[0]?.count || 0,
        results: data[0].results
    })
})

module.exports = { searchBooks }