const booksToInsert = [
  {
    "isbn": "9780000000001",
    "title": "Introduction to Data Science",
    "authors": [
      "Laura Martinez",
      "Sarah Davis",
      "Daniel Thomas"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/1"
  },
  {
    "isbn": "9780000000002",
    "title": "Advanced Computer Science",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/2"
  },
  {
    "isbn": "9780000000003",
    "title": "Concepts in Software Engineering",
    "authors": [
      "James Anderson",
      "Emily Johnson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/3"
  },
  {
    "isbn": "9780000000004",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "Olivia Moore",
      "James Anderson",
      "Sarah Davis"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/4"
  },
  {
    "isbn": "9780000000005",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "Michael Brown",
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/5"
  },
  {
    "isbn": "9780000000006",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "John Smith",
      "Sarah Davis"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/6"
  },
  {
    "isbn": "9780000000007",
    "title": "Advanced Software Engineering",
    "authors": [
      "Laura Martinez",
      "Emily Johnson",
      "James Anderson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/7"
  },
  {
    "isbn": "9780000000008",
    "title": "Practical Guide to Data Science",
    "authors": [
      "David Wilson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/8"
  },
  {
    "isbn": "9780000000009",
    "title": "Advanced Software Engineering",
    "authors": [
      "Chris Martin",
      "David Wilson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/9"
  },
  {
    "isbn": "9780000000010",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Michael Brown",
      "David Wilson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/10"
  },
  {
    "isbn": "9780000000011",
    "title": "Understanding Operating Systems",
    "authors": [
      "Daniel Thomas",
      "Emma White"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/11"
  },
  {
    "isbn": "9780000000012",
    "title": "Introduction to Operating Systems",
    "authors": [
      "Laura Martinez",
      "Emma White",
      "Daniel Thomas"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/12"
  },
  {
    "isbn": "9780000000013",
    "title": "Advanced Operating Systems",
    "authors": [
      "David Wilson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/13"
  },
  {
    "isbn": "9780000000014",
    "title": "Concepts in Databases",
    "authors": [
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/14"
  },
  {
    "isbn": "9780000000015",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Laura Martinez",
      "Emily Johnson",
      "Chris Martin"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/15"
  },
  {
    "isbn": "9780000000016",
    "title": "Advanced Computer Science",
    "authors": [
      "Olivia Moore",
      "Chris Martin"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/16"
  },
  {
    "isbn": "9780000000017",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "Emily Johnson",
      "Michael Brown"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/17"
  },
  {
    "isbn": "9780000000018",
    "title": "Introduction to Operating Systems",
    "authors": [
      "James Anderson",
      "Michael Brown",
      "Olivia Moore"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/18"
  },
  {
    "isbn": "9780000000019",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Michael Brown",
      "Emily Johnson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/19"
  },
  {
    "isbn": "9780000000020",
    "title": "Concepts in Operating Systems",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/20"
  },
  {
    "isbn": "9780000000021",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Laura Martinez",
      "John Smith"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/21"
  },
  {
    "isbn": "9780000000022",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Emma White",
      "Olivia Moore"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/22"
  },
  {
    "isbn": "9780000000023",
    "title": "Understanding Computer Science",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/23"
  },
  {
    "isbn": "9780000000024",
    "title": "Concepts in Cloud Computing",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/24"
  },
  {
    "isbn": "9780000000025",
    "title": "Advanced Machine Learning",
    "authors": [
      "David Wilson",
      "Laura Martinez"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/25"
  },
  {
    "isbn": "9780000000026",
    "title": "Concepts in Computer Science",
    "authors": [
      "Emma White"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/26"
  },
  {
    "isbn": "9780000000027",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "Sophia Taylor",
      "Sarah Davis",
      "Michael Brown"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/27"
  },
  {
    "isbn": "9780000000028",
    "title": "Advanced Machine Learning",
    "authors": [
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/28"
  },
  {
    "isbn": "9780000000029",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "Daniel Thomas",
      "John Smith"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/29"
  },
  {
    "isbn": "9780000000030",
    "title": "Concepts in Computer Science",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/30"
  },
  {
    "isbn": "9780000000031",
    "title": "Understanding Computer Science",
    "authors": [
      "Chris Martin",
      "Laura Martinez"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/31"
  },
  {
    "isbn": "9780000000032",
    "title": "Fundamentals of Data Science",
    "authors": [
      "David Wilson",
      "Chris Martin",
      "Emily Johnson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/32"
  },
  {
    "isbn": "9780000000033",
    "title": "Introduction to Machine Learning",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/33"
  },
  {
    "isbn": "9780000000034",
    "title": "Introduction to Machine Learning",
    "authors": [
      "Emily Johnson",
      "Olivia Moore"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/34"
  },
  {
    "isbn": "9780000000035",
    "title": "Introduction to Operating Systems",
    "authors": [
      "David Wilson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/35"
  },
  {
    "isbn": "9780000000036",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "Sarah Davis",
      "Sophia Taylor"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2021,
    "url": "https://example.com/resource/36"
  },
  {
    "isbn": "9780000000037",
    "title": "Fundamentals of Databases",
    "authors": [
      "David Wilson",
      "Emily Johnson",
      "Sarah Davis"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2021,
    "url": "https://example.com/resource/37"
  },
  {
    "isbn": "9780000000038",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/38"
  },
  {
    "isbn": "9780000000039",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "David Wilson",
      "Michael Brown",
      "James Anderson"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/39"
  },
  {
    "isbn": "9780000000040",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "Emma White",
      "John Smith"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/40"
  },
  {
    "isbn": "9780000000041",
    "title": "Concepts in Cloud Computing",
    "authors": [
      "Emma White",
      "Sophia Taylor"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/41"
  },
  {
    "isbn": "9780000000042",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Chris Martin",
      "Olivia Moore"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/42"
  },
  {
    "isbn": "9780000000043",
    "title": "Concepts in Cyber Security",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/43"
  },
  {
    "isbn": "9780000000044",
    "title": "Advanced Operating Systems",
    "authors": [
      "James Anderson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/44"
  },
  {
    "isbn": "9780000000045",
    "title": "Concepts in Cyber Security",
    "authors": [
      "Sarah Davis",
      "Daniel Thomas",
      "Emily Johnson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/45"
  },
  {
    "isbn": "9780000000046",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "Laura Martinez",
      "Sophia Taylor"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/46"
  },
  {
    "isbn": "9780000000047",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Michael Brown",
      "Chris Martin",
      "Laura Martinez"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/47"
  },
  {
    "isbn": "9780000000048",
    "title": "Concepts in Data Science",
    "authors": [
      "Emma White"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/48"
  },
  {
    "isbn": "9780000000049",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "Emma White",
      "James Anderson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/49"
  },
  {
    "isbn": "9780000000050",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Michael Brown",
      "Emily Johnson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/50"
  },
  {
    "isbn": "9780000000051",
    "title": "Concepts in Networking",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/51"
  },
  {
    "isbn": "9780000000052",
    "title": "Advanced Cloud Computing",
    "authors": [
      "Laura Martinez",
      "Emily Johnson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/52"
  },
  {
    "isbn": "9780000000053",
    "title": "Understanding Computer Science",
    "authors": [
      "David Wilson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/53"
  },
  {
    "isbn": "9780000000054",
    "title": "Understanding Cyber Security",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/54"
  },
  {
    "isbn": "9780000000055",
    "title": "Advanced Cyber Security",
    "authors": [
      "Sophia Taylor",
      "Michael Brown"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/55"
  },
  {
    "isbn": "9780000000056",
    "title": "Understanding Databases",
    "authors": [
      "James Anderson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/56"
  },
  {
    "isbn": "9780000000057",
    "title": "Fundamentals of Software Engineering",
    "authors": [
      "Emily Johnson",
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/57"
  },
  {
    "isbn": "9780000000058",
    "title": "Concepts in Cloud Computing",
    "authors": [
      "James Anderson",
      "Olivia Moore",
      "Emily Johnson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/58"
  },
  {
    "isbn": "9780000000059",
    "title": "Fundamentals of Databases",
    "authors": [
      "Laura Martinez",
      "John Smith",
      "Sarah Davis"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/59"
  },
  {
    "isbn": "9780000000060",
    "title": "Practical Guide to Software Engineering",
    "authors": [
      "James Anderson",
      "Emily Johnson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/60"
  },
  {
    "isbn": "9780000000061",
    "title": "Concepts in Computer Science",
    "authors": [
      "Emma White"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/61"
  },
  {
    "isbn": "9780000000062",
    "title": "Introduction to Databases",
    "authors": [
      "David Wilson",
      "Sarah Davis",
      "Emma White"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/62"
  },
  {
    "isbn": "9780000000063",
    "title": "Concepts in Software Engineering",
    "authors": [
      "Chris Martin",
      "Sarah Davis",
      "Emma White"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/63"
  },
  {
    "isbn": "9780000000064",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/64"
  },
  {
    "isbn": "9780000000065",
    "title": "Concepts in Machine Learning",
    "authors": [
      "Sarah Davis",
      "John Smith"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/65"
  },
  {
    "isbn": "9780000000066",
    "title": "Understanding Computer Science",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/66"
  },
  {
    "isbn": "9780000000067",
    "title": "Introduction to Computer Science",
    "authors": [
      "Olivia Moore",
      "David Wilson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/67"
  },
  {
    "isbn": "9780000000068",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Olivia Moore",
      "Sophia Taylor"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/68"
  },
  {
    "isbn": "9780000000069",
    "title": "Introduction to Networking",
    "authors": [
      "Daniel Thomas",
      "John Smith"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/69"
  },
  {
    "isbn": "9780000000070",
    "title": "Concepts in Data Science",
    "authors": [
      "Emily Johnson",
      "James Anderson",
      "Sarah Davis"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2021,
    "url": "https://example.com/resource/70"
  },
  {
    "isbn": "9780000000071",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "Olivia Moore",
      "James Anderson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/71"
  },
  {
    "isbn": "9780000000072",
    "title": "Advanced Computer Science",
    "authors": [
      "Chris Martin",
      "Emily Johnson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/72"
  },
  {
    "isbn": "9780000000073",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/73"
  },
  {
    "isbn": "9780000000074",
    "title": "Practical Guide to Machine Learning",
    "authors": [
      "Daniel Thomas",
      "James Anderson",
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/74"
  },
  {
    "isbn": "9780000000075",
    "title": "Advanced Networking",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/75"
  },
  {
    "isbn": "9780000000076",
    "title": "Practical Guide to Software Engineering",
    "authors": [
      "David Wilson",
      "Michael Brown",
      "Olivia Moore"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/76"
  },
  {
    "isbn": "9780000000077",
    "title": "Understanding Networking",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/77"
  },
  {
    "isbn": "9780000000078",
    "title": "Advanced Artificial Intelligence",
    "authors": [
      "Sophia Taylor",
      "Michael Brown"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/78"
  },
  {
    "isbn": "9780000000079",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Emma White"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/79"
  },
  {
    "isbn": "9780000000080",
    "title": "Advanced Networking",
    "authors": [
      "Michael Brown",
      "Emily Johnson",
      "David Wilson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/80"
  },
  {
    "isbn": "9780000000081",
    "title": "Understanding Networking",
    "authors": [
      "John Smith",
      "Olivia Moore"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/81"
  },
  {
    "isbn": "9780000000082",
    "title": "Understanding Software Engineering",
    "authors": [
      "Olivia Moore",
      "Chris Martin"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/82"
  },
  {
    "isbn": "9780000000083",
    "title": "Fundamentals of Software Engineering",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/83"
  },
  {
    "isbn": "9780000000084",
    "title": "Advanced Machine Learning",
    "authors": [
      "Chris Martin",
      "Daniel Thomas"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/84"
  },
  {
    "isbn": "9780000000085",
    "title": "Advanced Software Engineering",
    "authors": [
      "James Anderson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/85"
  },
  {
    "isbn": "9780000000086",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/86"
  },
  {
    "isbn": "9780000000087",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "Emma White"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/87"
  },
  {
    "isbn": "9780000000088",
    "title": "Concepts in Computer Science",
    "authors": [
      "David Wilson",
      "Chris Martin",
      "Emma White"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/88"
  },
  {
    "isbn": "9780000000089",
    "title": "Advanced Machine Learning",
    "authors": [
      "Sophia Taylor",
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/89"
  },
  {
    "isbn": "9780000000090",
    "title": "Fundamentals of Databases",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/90"
  },
  {
    "isbn": "9780000000091",
    "title": "Understanding Networking",
    "authors": [
      "Sophia Taylor",
      "James Anderson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/91"
  },
  {
    "isbn": "9780000000092",
    "title": "Advanced Machine Learning",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/92"
  },
  {
    "isbn": "9780000000093",
    "title": "Fundamentals of Networking",
    "authors": [
      "Michael Brown",
      "Olivia Moore",
      "John Smith"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/93"
  },
  {
    "isbn": "9780000000094",
    "title": "Concepts in Software Engineering",
    "authors": [
      "Michael Brown",
      "Emma White"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/94"
  },
  {
    "isbn": "9780000000095",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "David Wilson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/95"
  },
  {
    "isbn": "9780000000096",
    "title": "Concepts in Computer Science",
    "authors": [
      "John Smith"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/96"
  },
  {
    "isbn": "9780000000097",
    "title": "Practical Guide to Databases",
    "authors": [
      "James Anderson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/97"
  },
  {
    "isbn": "9780000000098",
    "title": "Practical Guide to Databases",
    "authors": [
      "Emma White",
      "Emily Johnson",
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/98"
  },
  {
    "isbn": "9780000000099",
    "title": "Understanding Cyber Security",
    "authors": [
      "John Smith",
      "Sarah Davis",
      "David Wilson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/99"
  },
  {
    "isbn": "9780000000100",
    "title": "Advanced Software Engineering",
    "authors": [
      "David Wilson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/100"
  },
  {
    "isbn": "9780000000101",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/101"
  },
  {
    "isbn": "9780000000102",
    "title": "Advanced Operating Systems",
    "authors": [
      "David Wilson",
      "Sarah Davis"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/102"
  },
  {
    "isbn": "9780000000103",
    "title": "Advanced Computer Science",
    "authors": [
      "Chris Martin",
      "Laura Martinez"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/103"
  },
  {
    "isbn": "9780000000104",
    "title": "Advanced Computer Science",
    "authors": [
      "Olivia Moore",
      "Sophia Taylor",
      "David Wilson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/104"
  },
  {
    "isbn": "9780000000105",
    "title": "Fundamentals of Cyber Security",
    "authors": [
      "Laura Martinez",
      "Daniel Thomas",
      "Emma White"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/105"
  },
  {
    "isbn": "9780000000106",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/106"
  },
  {
    "isbn": "9780000000107",
    "title": "Introduction to Databases",
    "authors": [
      "James Anderson",
      "John Smith",
      "Daniel Thomas"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/107"
  },
  {
    "isbn": "9780000000108",
    "title": "Introduction to Computer Science",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/108"
  },
  {
    "isbn": "9780000000109",
    "title": "Practical Guide to Computer Science",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/109"
  },
  {
    "isbn": "9780000000110",
    "title": "Advanced Software Engineering",
    "authors": [
      "David Wilson",
      "Emma White",
      "Laura Martinez"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/110"
  },
  {
    "isbn": "9780000000111",
    "title": "Advanced Data Science",
    "authors": [
      "Olivia Moore",
      "Emma White"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/111"
  },
  {
    "isbn": "9780000000112",
    "title": "Fundamentals of Databases",
    "authors": [
      "Emma White",
      "Daniel Thomas"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/112"
  },
  {
    "isbn": "9780000000113",
    "title": "Practical Guide to Data Science",
    "authors": [
      "Olivia Moore",
      "Michael Brown",
      "John Smith"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/113"
  },
  {
    "isbn": "9780000000114",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Olivia Moore",
      "James Anderson",
      "Emily Johnson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/114"
  },
  {
    "isbn": "9780000000115",
    "title": "Fundamentals of Software Engineering",
    "authors": [
      "Laura Martinez",
      "John Smith"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/115"
  },
  {
    "isbn": "9780000000116",
    "title": "Advanced Data Science",
    "authors": [
      "Chris Martin",
      "Emily Johnson",
      "Olivia Moore"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/116"
  },
  {
    "isbn": "9780000000117",
    "title": "Understanding Computer Science",
    "authors": [
      "Daniel Thomas",
      "Olivia Moore",
      "Emily Johnson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/117"
  },
  {
    "isbn": "9780000000118",
    "title": "Understanding Operating Systems",
    "authors": [
      "Chris Martin",
      "James Anderson",
      "Emma White"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/118"
  },
  {
    "isbn": "9780000000119",
    "title": "Advanced Networking",
    "authors": [
      "Daniel Thomas",
      "Chris Martin"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/119"
  },
  {
    "isbn": "9780000000120",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Emma White"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/120"
  },
  {
    "isbn": "9780000000121",
    "title": "Advanced Cyber Security",
    "authors": [
      "John Smith",
      "Chris Martin",
      "Sophia Taylor"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/121"
  },
  {
    "isbn": "9780000000122",
    "title": "Fundamentals of Software Engineering",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/122"
  },
  {
    "isbn": "9780000000123",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "Laura Martinez",
      "John Smith",
      "Emma White"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/123"
  },
  {
    "isbn": "9780000000124",
    "title": "Understanding Data Science",
    "authors": [
      "Sarah Davis",
      "Olivia Moore"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/124"
  },
  {
    "isbn": "9780000000125",
    "title": "Fundamentals of Data Science",
    "authors": [
      "David Wilson",
      "Chris Martin"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/125"
  },
  {
    "isbn": "9780000000126",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Sarah Davis",
      "Chris Martin"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/126"
  },
  {
    "isbn": "9780000000127",
    "title": "Fundamentals of Databases",
    "authors": [
      "Chris Martin",
      "Olivia Moore"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/127"
  },
  {
    "isbn": "9780000000128",
    "title": "Concepts in Cloud Computing",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/128"
  },
  {
    "isbn": "9780000000129",
    "title": "Advanced Computer Science",
    "authors": [
      "Chris Martin",
      "Sophia Taylor",
      "Laura Martinez"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/129"
  },
  {
    "isbn": "9780000000130",
    "title": "Fundamentals of Cyber Security",
    "authors": [
      "Emma White",
      "Daniel Thomas"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/130"
  },
  {
    "isbn": "9780000000131",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/131"
  },
  {
    "isbn": "9780000000132",
    "title": "Advanced Databases",
    "authors": [
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/132"
  },
  {
    "isbn": "9780000000133",
    "title": "Practical Guide to Networking",
    "authors": [
      "Sarah Davis",
      "David Wilson",
      "Daniel Thomas"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/133"
  },
  {
    "isbn": "9780000000134",
    "title": "Practical Guide to Computer Science",
    "authors": [
      "Olivia Moore",
      "Laura Martinez"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/134"
  },
  {
    "isbn": "9780000000135",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Sarah Davis",
      "John Smith",
      "Olivia Moore"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/135"
  },
  {
    "isbn": "9780000000136",
    "title": "Practical Guide to Software Engineering",
    "authors": [
      "Daniel Thomas",
      "James Anderson",
      "Emily Johnson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/136"
  },
  {
    "isbn": "9780000000137",
    "title": "Understanding Databases",
    "authors": [
      "James Anderson",
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/137"
  },
  {
    "isbn": "9780000000138",
    "title": "Practical Guide to Networking",
    "authors": [
      "James Anderson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/138"
  },
  {
    "isbn": "9780000000139",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Michael Brown",
      "James Anderson",
      "David Wilson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/139"
  },
  {
    "isbn": "9780000000140",
    "title": "Practical Guide to Data Science",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/140"
  },
  {
    "isbn": "9780000000141",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "John Smith",
      "Daniel Thomas",
      "Olivia Moore"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/141"
  },
  {
    "isbn": "9780000000142",
    "title": "Introduction to Networking",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/142"
  },
  {
    "isbn": "9780000000143",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Sarah Davis",
      "Chris Martin",
      "Daniel Thomas"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/143"
  },
  {
    "isbn": "9780000000144",
    "title": "Practical Guide to Networking",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/144"
  },
  {
    "isbn": "9780000000145",
    "title": "Introduction to Operating Systems",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/145"
  },
  {
    "isbn": "9780000000146",
    "title": "Practical Guide to Networking",
    "authors": [
      "Michael Brown",
      "Chris Martin"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/146"
  },
  {
    "isbn": "9780000000147",
    "title": "Advanced Cloud Computing",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/147"
  },
  {
    "isbn": "9780000000148",
    "title": "Understanding Software Engineering",
    "authors": [
      "Emma White"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/148"
  },
  {
    "isbn": "9780000000149",
    "title": "Practical Guide to Data Science",
    "authors": [
      "James Anderson",
      "Daniel Thomas"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/149"
  },
  {
    "isbn": "9780000000150",
    "title": "Fundamentals of Databases",
    "authors": [
      "Daniel Thomas",
      "Michael Brown"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/150"
  },
  {
    "isbn": "9780000000151",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Sarah Davis",
      "David Wilson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/151"
  },
  {
    "isbn": "9780000000152",
    "title": "Advanced Networking",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/152"
  },
  {
    "isbn": "9780000000153",
    "title": "Fundamentals of Data Science",
    "authors": [
      "James Anderson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/153"
  },
  {
    "isbn": "9780000000154",
    "title": "Concepts in Networking",
    "authors": [
      "Emily Johnson",
      "Olivia Moore",
      "Sarah Davis"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/154"
  },
  {
    "isbn": "9780000000155",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "David Wilson",
      "Emma White",
      "Olivia Moore"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/155"
  },
  {
    "isbn": "9780000000156",
    "title": "Understanding Computer Science",
    "authors": [
      "Laura Martinez",
      "David Wilson",
      "Sarah Davis"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/156"
  },
  {
    "isbn": "9780000000157",
    "title": "Advanced Machine Learning",
    "authors": [
      "David Wilson",
      "John Smith"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/157"
  },
  {
    "isbn": "9780000000158",
    "title": "Understanding Computer Science",
    "authors": [
      "Laura Martinez",
      "John Smith"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/158"
  },
  {
    "isbn": "9780000000159",
    "title": "Advanced Machine Learning",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/159"
  },
  {
    "isbn": "9780000000160",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "John Smith",
      "David Wilson",
      "Sarah Davis"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/160"
  },
  {
    "isbn": "9780000000161",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/161"
  },
  {
    "isbn": "9780000000162",
    "title": "Advanced Operating Systems",
    "authors": [
      "David Wilson",
      "James Anderson",
      "Chris Martin"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/162"
  },
  {
    "isbn": "9780000000163",
    "title": "Advanced Databases",
    "authors": [
      "James Anderson",
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/163"
  },
  {
    "isbn": "9780000000164",
    "title": "Understanding Cyber Security",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/164"
  },
  {
    "isbn": "9780000000165",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "Daniel Thomas",
      "Olivia Moore",
      "Michael Brown"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/165"
  },
  {
    "isbn": "9780000000166",
    "title": "Concepts in Computer Science",
    "authors": [
      "Emily Johnson",
      "John Smith",
      "Michael Brown"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/166"
  },
  {
    "isbn": "9780000000167",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "James Anderson",
      "Emily Johnson",
      "John Smith"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/167"
  },
  {
    "isbn": "9780000000168",
    "title": "Understanding Networking",
    "authors": [
      "John Smith",
      "Emily Johnson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/168"
  },
  {
    "isbn": "9780000000169",
    "title": "Advanced Computer Science",
    "authors": [
      "Emma White",
      "John Smith"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/169"
  },
  {
    "isbn": "9780000000170",
    "title": "Advanced Software Engineering",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/170"
  },
  {
    "isbn": "9780000000171",
    "title": "Fundamentals of Cloud Computing",
    "authors": [
      "David Wilson",
      "Chris Martin"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/171"
  },
  {
    "isbn": "9780000000172",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/172"
  },
  {
    "isbn": "9780000000173",
    "title": "Introduction to Data Science",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/173"
  },
  {
    "isbn": "9780000000174",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "Chris Martin",
      "Olivia Moore",
      "David Wilson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/174"
  },
  {
    "isbn": "9780000000175",
    "title": "Understanding Operating Systems",
    "authors": [
      "Emma White",
      "Laura Martinez"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/175"
  },
  {
    "isbn": "9780000000176",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Chris Martin",
      "David Wilson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/176"
  },
  {
    "isbn": "9780000000177",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Sarah Davis",
      "Laura Martinez"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/177"
  },
  {
    "isbn": "9780000000178",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/178"
  },
  {
    "isbn": "9780000000179",
    "title": "Understanding Cyber Security",
    "authors": [
      "James Anderson",
      "Laura Martinez"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/179"
  },
  {
    "isbn": "9780000000180",
    "title": "Advanced Computer Science",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/180"
  },
  {
    "isbn": "9780000000181",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/181"
  },
  {
    "isbn": "9780000000182",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "James Anderson",
      "Olivia Moore"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/182"
  },
  {
    "isbn": "9780000000183",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/183"
  },
  {
    "isbn": "9780000000184",
    "title": "Concepts in Databases",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/184"
  },
  {
    "isbn": "9780000000185",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/185"
  },
  {
    "isbn": "9780000000186",
    "title": "Concepts in Databases",
    "authors": [
      "Sophia Taylor",
      "Michael Brown",
      "Laura Martinez"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/186"
  },
  {
    "isbn": "9780000000187",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "David Wilson",
      "John Smith"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/187"
  },
  {
    "isbn": "9780000000188",
    "title": "Fundamentals of Data Science",
    "authors": [
      "John Smith",
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/188"
  },
  {
    "isbn": "9780000000189",
    "title": "Fundamentals of Databases",
    "authors": [
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/189"
  },
  {
    "isbn": "9780000000190",
    "title": "Understanding Data Science",
    "authors": [
      "Sophia Taylor",
      "Olivia Moore",
      "Daniel Thomas"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/190"
  },
  {
    "isbn": "9780000000191",
    "title": "Advanced Cyber Security",
    "authors": [
      "Emily Johnson",
      "David Wilson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/191"
  },
  {
    "isbn": "9780000000192",
    "title": "Advanced Cloud Computing",
    "authors": [
      "Sophia Taylor",
      "Laura Martinez",
      "Sarah Davis"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/192"
  },
  {
    "isbn": "9780000000193",
    "title": "Advanced Cloud Computing",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/193"
  },
  {
    "isbn": "9780000000194",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "Daniel Thomas",
      "Michael Brown"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/194"
  },
  {
    "isbn": "9780000000195",
    "title": "Practical Guide to Networking",
    "authors": [
      "James Anderson",
      "Michael Brown",
      "Daniel Thomas"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/195"
  },
  {
    "isbn": "9780000000196",
    "title": "Advanced Artificial Intelligence",
    "authors": [
      "Chris Martin",
      "John Smith",
      "Emily Johnson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/196"
  },
  {
    "isbn": "9780000000197",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "Michael Brown",
      "James Anderson",
      "Chris Martin"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/197"
  },
  {
    "isbn": "9780000000198",
    "title": "Fundamentals of Networking",
    "authors": [
      "David Wilson",
      "James Anderson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/198"
  },
  {
    "isbn": "9780000000199",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Laura Martinez",
      "James Anderson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/199"
  },
  {
    "isbn": "9780000000200",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/200"
  },
  {
    "isbn": "9780000000201",
    "title": "Introduction to Software Engineering",
    "authors": [
      "James Anderson",
      "Sarah Davis",
      "Olivia Moore"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/201"
  },
  {
    "isbn": "9780000000202",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/202"
  },
  {
    "isbn": "9780000000203",
    "title": "Advanced Cyber Security",
    "authors": [
      "Laura Martinez",
      "Emma White"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/203"
  },
  {
    "isbn": "9780000000204",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/204"
  },
  {
    "isbn": "9780000000205",
    "title": "Fundamentals of Cloud Computing",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/205"
  },
  {
    "isbn": "9780000000206",
    "title": "Introduction to Networking",
    "authors": [
      "David Wilson",
      "Chris Martin"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/206"
  },
  {
    "isbn": "9780000000207",
    "title": "Concepts in Cyber Security",
    "authors": [
      "David Wilson",
      "Daniel Thomas",
      "Sarah Davis"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/207"
  },
  {
    "isbn": "9780000000208",
    "title": "Fundamentals of Data Science",
    "authors": [
      "James Anderson",
      "Daniel Thomas"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/208"
  },
  {
    "isbn": "9780000000209",
    "title": "Fundamentals of Networking",
    "authors": [
      "Olivia Moore",
      "Laura Martinez",
      "Emily Johnson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/209"
  },
  {
    "isbn": "9780000000210",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Emma White",
      "Olivia Moore",
      "Chris Martin"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/210"
  },
  {
    "isbn": "9780000000211",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/211"
  },
  {
    "isbn": "9780000000212",
    "title": "Understanding Data Science",
    "authors": [
      "Michael Brown",
      "John Smith"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/212"
  },
  {
    "isbn": "9780000000213",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Sarah Davis",
      "Michael Brown",
      "John Smith"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/213"
  },
  {
    "isbn": "9780000000214",
    "title": "Fundamentals of Data Science",
    "authors": [
      "David Wilson",
      "Olivia Moore",
      "Laura Martinez"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/214"
  },
  {
    "isbn": "9780000000215",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "Sophia Taylor",
      "John Smith",
      "Daniel Thomas"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/215"
  },
  {
    "isbn": "9780000000216",
    "title": "Understanding Databases",
    "authors": [
      "Michael Brown",
      "David Wilson",
      "Emily Johnson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/216"
  },
  {
    "isbn": "9780000000217",
    "title": "Concepts in Cloud Computing",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/217"
  },
  {
    "isbn": "9780000000218",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "David Wilson",
      "Sarah Davis",
      "Michael Brown"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/218"
  },
  {
    "isbn": "9780000000219",
    "title": "Fundamentals of Databases",
    "authors": [
      "Daniel Thomas",
      "David Wilson",
      "Olivia Moore"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/219"
  },
  {
    "isbn": "9780000000220",
    "title": "Fundamentals of Networking",
    "authors": [
      "Emma White"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/220"
  },
  {
    "isbn": "9780000000221",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Michael Brown",
      "John Smith"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/221"
  },
  {
    "isbn": "9780000000222",
    "title": "Practical Guide to Computer Science",
    "authors": [
      "Sophia Taylor",
      "Daniel Thomas",
      "James Anderson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/222"
  },
  {
    "isbn": "9780000000223",
    "title": "Advanced Artificial Intelligence",
    "authors": [
      "Emily Johnson",
      "James Anderson",
      "Chris Martin"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/223"
  },
  {
    "isbn": "9780000000224",
    "title": "Understanding Software Engineering",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/224"
  },
  {
    "isbn": "9780000000225",
    "title": "Introduction to Databases",
    "authors": [
      "James Anderson",
      "Emma White",
      "Laura Martinez"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/225"
  },
  {
    "isbn": "9780000000226",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Michael Brown",
      "Laura Martinez"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/226"
  },
  {
    "isbn": "9780000000227",
    "title": "Concepts in Computer Science",
    "authors": [
      "Emily Johnson",
      "Sarah Davis",
      "James Anderson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/227"
  },
  {
    "isbn": "9780000000228",
    "title": "Advanced Operating Systems",
    "authors": [
      "Emma White",
      "Chris Martin",
      "Olivia Moore"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/228"
  },
  {
    "isbn": "9780000000229",
    "title": "Advanced Data Science",
    "authors": [
      "John Smith",
      "Emily Johnson",
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/229"
  },
  {
    "isbn": "9780000000230",
    "title": "Advanced Software Engineering",
    "authors": [
      "Laura Martinez",
      "Olivia Moore"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/230"
  },
  {
    "isbn": "9780000000231",
    "title": "Advanced Operating Systems",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/231"
  },
  {
    "isbn": "9780000000232",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "John Smith"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/232"
  },
  {
    "isbn": "9780000000233",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "James Anderson",
      "Emily Johnson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/233"
  },
  {
    "isbn": "9780000000234",
    "title": "Understanding Data Science",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/234"
  },
  {
    "isbn": "9780000000235",
    "title": "Advanced Cyber Security",
    "authors": [
      "Olivia Moore",
      "Michael Brown"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/235"
  },
  {
    "isbn": "9780000000236",
    "title": "Advanced Databases",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/236"
  },
  {
    "isbn": "9780000000237",
    "title": "Fundamentals of Cyber Security",
    "authors": [
      "Laura Martinez",
      "Sophia Taylor"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/237"
  },
  {
    "isbn": "9780000000238",
    "title": "Advanced Cyber Security",
    "authors": [
      "Michael Brown",
      "Sophia Taylor",
      "Laura Martinez"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/238"
  },
  {
    "isbn": "9780000000239",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "Michael Brown",
      "John Smith"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/239"
  },
  {
    "isbn": "9780000000240",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/240"
  },
  {
    "isbn": "9780000000241",
    "title": "Fundamentals of Cyber Security",
    "authors": [
      "John Smith"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/241"
  },
  {
    "isbn": "9780000000242",
    "title": "Understanding Databases",
    "authors": [
      "Laura Martinez",
      "Emily Johnson",
      "James Anderson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/242"
  },
  {
    "isbn": "9780000000243",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Olivia Moore",
      "Emily Johnson",
      "Emma White"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/243"
  },
  {
    "isbn": "9780000000244",
    "title": "Fundamentals of Software Engineering",
    "authors": [
      "David Wilson",
      "Emily Johnson",
      "Olivia Moore"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/244"
  },
  {
    "isbn": "9780000000245",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/245"
  },
  {
    "isbn": "9780000000246",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Sophia Taylor",
      "Sarah Davis",
      "John Smith"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/246"
  },
  {
    "isbn": "9780000000247",
    "title": "Concepts in Databases",
    "authors": [
      "Sophia Taylor",
      "Daniel Thomas",
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/247"
  },
  {
    "isbn": "9780000000248",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Chris Martin",
      "Laura Martinez",
      "James Anderson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/248"
  },
  {
    "isbn": "9780000000249",
    "title": "Practical Guide to Software Engineering",
    "authors": [
      "Emily Johnson",
      "Olivia Moore",
      "Daniel Thomas"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/249"
  },
  {
    "isbn": "9780000000250",
    "title": "Understanding Cyber Security",
    "authors": [
      "David Wilson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/250"
  },
  {
    "isbn": "9780000000251",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Michael Brown",
      "Emily Johnson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/251"
  },
  {
    "isbn": "9780000000252",
    "title": "Introduction to Cyber Security",
    "authors": [
      "James Anderson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/252"
  },
  {
    "isbn": "9780000000253",
    "title": "Practical Guide to Machine Learning",
    "authors": [
      "Sarah Davis",
      "James Anderson"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/253"
  },
  {
    "isbn": "9780000000254",
    "title": "Understanding Operating Systems",
    "authors": [
      "Sophia Taylor",
      "Sarah Davis"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/254"
  },
  {
    "isbn": "9780000000255",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Sophia Taylor",
      "James Anderson",
      "Olivia Moore"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/255"
  },
  {
    "isbn": "9780000000256",
    "title": "Understanding Networking",
    "authors": [
      "Michael Brown",
      "David Wilson",
      "Chris Martin"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/256"
  },
  {
    "isbn": "9780000000257",
    "title": "Introduction to Databases",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/257"
  },
  {
    "isbn": "9780000000258",
    "title": "Concepts in Networking",
    "authors": [
      "Emma White",
      "Sophia Taylor",
      "Emily Johnson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/258"
  },
  {
    "isbn": "9780000000259",
    "title": "Practical Guide to Data Science",
    "authors": [
      "Olivia Moore",
      "Laura Martinez",
      "Emma White"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/259"
  },
  {
    "isbn": "9780000000260",
    "title": "Concepts in Operating Systems",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/260"
  },
  {
    "isbn": "9780000000261",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Laura Martinez",
      "Olivia Moore",
      "Emma White"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/261"
  },
  {
    "isbn": "9780000000262",
    "title": "Fundamentals of Networking",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/262"
  },
  {
    "isbn": "9780000000263",
    "title": "Concepts in Computer Science",
    "authors": [
      "Chris Martin",
      "Daniel Thomas"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/263"
  },
  {
    "isbn": "9780000000264",
    "title": "Understanding Networking",
    "authors": [
      "Michael Brown",
      "Chris Martin",
      "James Anderson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/264"
  },
  {
    "isbn": "9780000000265",
    "title": "Practical Guide to Data Science",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/265"
  },
  {
    "isbn": "9780000000266",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "Olivia Moore",
      "Chris Martin"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/266"
  },
  {
    "isbn": "9780000000267",
    "title": "Advanced Computer Science",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/267"
  },
  {
    "isbn": "9780000000268",
    "title": "Advanced Machine Learning",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/268"
  },
  {
    "isbn": "9780000000269",
    "title": "Concepts in Data Science",
    "authors": [
      "Emma White"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/269"
  },
  {
    "isbn": "9780000000270",
    "title": "Advanced Data Science",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/270"
  },
  {
    "isbn": "9780000000271",
    "title": "Advanced Artificial Intelligence",
    "authors": [
      "Emma White",
      "John Smith"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/271"
  },
  {
    "isbn": "9780000000272",
    "title": "Advanced Software Engineering",
    "authors": [
      "David Wilson",
      "Emily Johnson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/272"
  },
  {
    "isbn": "9780000000273",
    "title": "Practical Guide to Networking",
    "authors": [
      "Emma White"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/273"
  },
  {
    "isbn": "9780000000274",
    "title": "Understanding Data Science",
    "authors": [
      "Olivia Moore",
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/274"
  },
  {
    "isbn": "9780000000275",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Emma White",
      "Daniel Thomas"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/275"
  },
  {
    "isbn": "9780000000276",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Emily Johnson",
      "Laura Martinez",
      "Michael Brown"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/276"
  },
  {
    "isbn": "9780000000277",
    "title": "Introduction to Operating Systems",
    "authors": [
      "Emma White",
      "Chris Martin",
      "James Anderson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/277"
  },
  {
    "isbn": "9780000000278",
    "title": "Understanding Computer Science",
    "authors": [
      "David Wilson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/278"
  },
  {
    "isbn": "9780000000279",
    "title": "Understanding Networking",
    "authors": [
      "David Wilson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/279"
  },
  {
    "isbn": "9780000000280",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "James Anderson",
      "Daniel Thomas"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/280"
  },
  {
    "isbn": "9780000000281",
    "title": "Fundamentals of Networking",
    "authors": [
      "David Wilson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/281"
  },
  {
    "isbn": "9780000000282",
    "title": "Concepts in Networking",
    "authors": [
      "Chris Martin",
      "Michael Brown"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/282"
  },
  {
    "isbn": "9780000000283",
    "title": "Fundamentals of Networking",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/283"
  },
  {
    "isbn": "9780000000284",
    "title": "Concepts in Networking",
    "authors": [
      "David Wilson",
      "Michael Brown",
      "Sarah Davis"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2021,
    "url": "https://example.com/resource/284"
  },
  {
    "isbn": "9780000000285",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Emma White",
      "Chris Martin",
      "John Smith"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/285"
  },
  {
    "isbn": "9780000000286",
    "title": "Advanced Data Science",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/286"
  },
  {
    "isbn": "9780000000287",
    "title": "Understanding Networking",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/287"
  },
  {
    "isbn": "9780000000288",
    "title": "Concepts in Cloud Computing",
    "authors": [
      "Olivia Moore",
      "Emma White"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/288"
  },
  {
    "isbn": "9780000000289",
    "title": "Concepts in Software Engineering",
    "authors": [
      "Sarah Davis",
      "Michael Brown"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/289"
  },
  {
    "isbn": "9780000000290",
    "title": "Advanced Cloud Computing",
    "authors": [
      "Emma White",
      "Michael Brown",
      "Sophia Taylor"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/290"
  },
  {
    "isbn": "9780000000291",
    "title": "Advanced Cloud Computing",
    "authors": [
      "Emily Johnson",
      "James Anderson",
      "David Wilson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/291"
  },
  {
    "isbn": "9780000000292",
    "title": "Advanced Operating Systems",
    "authors": [
      "Sophia Taylor",
      "James Anderson",
      "John Smith"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/292"
  },
  {
    "isbn": "9780000000293",
    "title": "Fundamentals of Artificial Intelligence",
    "authors": [
      "John Smith",
      "Emily Johnson",
      "James Anderson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/293"
  },
  {
    "isbn": "9780000000294",
    "title": "Concepts in Operating Systems",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/294"
  },
  {
    "isbn": "9780000000295",
    "title": "Introduction to Data Science",
    "authors": [
      "Emma White"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/295"
  },
  {
    "isbn": "9780000000296",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/296"
  },
  {
    "isbn": "9780000000297",
    "title": "Practical Guide to Networking",
    "authors": [
      "Laura Martinez",
      "James Anderson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/297"
  },
  {
    "isbn": "9780000000298",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "John Smith"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/298"
  },
  {
    "isbn": "9780000000299",
    "title": "Understanding Machine Learning",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/299"
  },
  {
    "isbn": "9780000000300",
    "title": "Understanding Cyber Security",
    "authors": [
      "Daniel Thomas",
      "Sarah Davis",
      "Michael Brown"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/300"
  },
  {
    "isbn": "9780000000301",
    "title": "Advanced Cloud Computing",
    "authors": [
      "John Smith",
      "Emma White"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/301"
  },
  {
    "isbn": "9780000000302",
    "title": "Advanced Cyber Security",
    "authors": [
      "Emily Johnson",
      "Olivia Moore",
      "David Wilson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/302"
  },
  {
    "isbn": "9780000000303",
    "title": "Concepts in Networking",
    "authors": [
      "Sarah Davis",
      "Sophia Taylor",
      "Olivia Moore"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/303"
  },
  {
    "isbn": "9780000000304",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Laura Martinez",
      "Michael Brown"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/304"
  },
  {
    "isbn": "9780000000305",
    "title": "Introduction to Data Science",
    "authors": [
      "Daniel Thomas",
      "James Anderson",
      "Emma White"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/305"
  },
  {
    "isbn": "9780000000306",
    "title": "Practical Guide to Databases",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/306"
  },
  {
    "isbn": "9780000000307",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Michael Brown",
      "Chris Martin",
      "David Wilson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/307"
  },
  {
    "isbn": "9780000000308",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "Laura Martinez",
      "Michael Brown"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/308"
  },
  {
    "isbn": "9780000000309",
    "title": "Understanding Software Engineering",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/309"
  },
  {
    "isbn": "9780000000310",
    "title": "Fundamentals of Data Science",
    "authors": [
      "James Anderson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/310"
  },
  {
    "isbn": "9780000000311",
    "title": "Advanced Operating Systems",
    "authors": [
      "Sarah Davis",
      "Sophia Taylor"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/311"
  },
  {
    "isbn": "9780000000312",
    "title": "Understanding Databases",
    "authors": [
      "David Wilson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/312"
  },
  {
    "isbn": "9780000000313",
    "title": "Concepts in Cyber Security",
    "authors": [
      "Daniel Thomas",
      "John Smith",
      "James Anderson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/313"
  },
  {
    "isbn": "9780000000314",
    "title": "Practical Guide to Networking",
    "authors": [
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/314"
  },
  {
    "isbn": "9780000000315",
    "title": "Understanding Software Engineering",
    "authors": [
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/315"
  },
  {
    "isbn": "9780000000316",
    "title": "Concepts in Software Engineering",
    "authors": [
      "Laura Martinez",
      "Olivia Moore"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/316"
  },
  {
    "isbn": "9780000000317",
    "title": "Fundamentals of Data Science",
    "authors": [
      "James Anderson",
      "Sophia Taylor"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/317"
  },
  {
    "isbn": "9780000000318",
    "title": "Practical Guide to Software Engineering",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/318"
  },
  {
    "isbn": "9780000000319",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "Sarah Davis",
      "Emily Johnson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/319"
  },
  {
    "isbn": "9780000000320",
    "title": "Concepts in Networking",
    "authors": [
      "Chris Martin",
      "Emily Johnson",
      "Emma White"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/320"
  },
  {
    "isbn": "9780000000321",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Emily Johnson",
      "John Smith",
      "David Wilson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/321"
  },
  {
    "isbn": "9780000000322",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Sarah Davis",
      "Olivia Moore"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/322"
  },
  {
    "isbn": "9780000000323",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "David Wilson",
      "Olivia Moore",
      "James Anderson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/323"
  },
  {
    "isbn": "9780000000324",
    "title": "Understanding Software Engineering",
    "authors": [
      "Sarah Davis",
      "Olivia Moore"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/324"
  },
  {
    "isbn": "9780000000325",
    "title": "Concepts in Data Science",
    "authors": [
      "Michael Brown",
      "Olivia Moore"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/325"
  },
  {
    "isbn": "9780000000326",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "Emily Johnson",
      "Sophia Taylor"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/326"
  },
  {
    "isbn": "9780000000327",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/327"
  },
  {
    "isbn": "9780000000328",
    "title": "Concepts in Machine Learning",
    "authors": [
      "David Wilson",
      "John Smith"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/328"
  },
  {
    "isbn": "9780000000329",
    "title": "Practical Guide to Machine Learning",
    "authors": [
      "Daniel Thomas",
      "David Wilson",
      "Chris Martin"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/329"
  },
  {
    "isbn": "9780000000330",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "Emily Johnson",
      "Emma White",
      "James Anderson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/330"
  },
  {
    "isbn": "9780000000331",
    "title": "Introduction to Operating Systems",
    "authors": [
      "Olivia Moore",
      "Sarah Davis"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/331"
  },
  {
    "isbn": "9780000000332",
    "title": "Introduction to Databases",
    "authors": [
      "Laura Martinez",
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/332"
  },
  {
    "isbn": "9780000000333",
    "title": "Advanced Networking",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/333"
  },
  {
    "isbn": "9780000000334",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Laura Martinez",
      "Sarah Davis",
      "David Wilson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/334"
  },
  {
    "isbn": "9780000000335",
    "title": "Advanced Cloud Computing",
    "authors": [
      "John Smith"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/335"
  },
  {
    "isbn": "9780000000336",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Sophia Taylor",
      "Sarah Davis"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/336"
  },
  {
    "isbn": "9780000000337",
    "title": "Introduction to Networking",
    "authors": [
      "Olivia Moore",
      "David Wilson",
      "Daniel Thomas"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/337"
  },
  {
    "isbn": "9780000000338",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/338"
  },
  {
    "isbn": "9780000000339",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/339"
  },
  {
    "isbn": "9780000000340",
    "title": "Advanced Data Science",
    "authors": [
      "James Anderson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/340"
  },
  {
    "isbn": "9780000000341",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "John Smith",
      "Sarah Davis"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/341"
  },
  {
    "isbn": "9780000000342",
    "title": "Practical Guide to Computer Science",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/342"
  },
  {
    "isbn": "9780000000343",
    "title": "Introduction to Computer Science",
    "authors": [
      "Sophia Taylor",
      "Laura Martinez",
      "Emma White"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/343"
  },
  {
    "isbn": "9780000000344",
    "title": "Concepts in Databases",
    "authors": [
      "Sophia Taylor",
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/344"
  },
  {
    "isbn": "9780000000345",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Laura Martinez",
      "Sophia Taylor"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/345"
  },
  {
    "isbn": "9780000000346",
    "title": "Advanced Operating Systems",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/346"
  },
  {
    "isbn": "9780000000347",
    "title": "Concepts in Operating Systems",
    "authors": [
      "David Wilson",
      "Daniel Thomas"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/347"
  },
  {
    "isbn": "9780000000348",
    "title": "Concepts in Machine Learning",
    "authors": [
      "Laura Martinez",
      "Chris Martin",
      "Emma White"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/348"
  },
  {
    "isbn": "9780000000349",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Emma White",
      "Sophia Taylor"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/349"
  },
  {
    "isbn": "9780000000350",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Olivia Moore",
      "John Smith"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/350"
  },
  {
    "isbn": "9780000000351",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/351"
  },
  {
    "isbn": "9780000000352",
    "title": "Fundamentals of Cyber Security",
    "authors": [
      "John Smith",
      "Laura Martinez",
      "Sarah Davis"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/352"
  },
  {
    "isbn": "9780000000353",
    "title": "Understanding Cyber Security",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/353"
  },
  {
    "isbn": "9780000000354",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Chris Martin",
      "Michael Brown"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/354"
  },
  {
    "isbn": "9780000000355",
    "title": "Concepts in Cyber Security",
    "authors": [
      "Emma White",
      "Sophia Taylor",
      "Laura Martinez"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/355"
  },
  {
    "isbn": "9780000000356",
    "title": "Advanced Software Engineering",
    "authors": [
      "Chris Martin",
      "Emma White",
      "Emily Johnson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/356"
  },
  {
    "isbn": "9780000000357",
    "title": "Fundamentals of Databases",
    "authors": [
      "James Anderson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/357"
  },
  {
    "isbn": "9780000000358",
    "title": "Concepts in Computer Science",
    "authors": [
      "Sarah Davis",
      "Daniel Thomas"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/358"
  },
  {
    "isbn": "9780000000359",
    "title": "Understanding Data Science",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/359"
  },
  {
    "isbn": "9780000000360",
    "title": "Concepts in Cyber Security",
    "authors": [
      "James Anderson",
      "Daniel Thomas"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/360"
  },
  {
    "isbn": "9780000000361",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/361"
  },
  {
    "isbn": "9780000000362",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "Sarah Davis",
      "James Anderson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/362"
  },
  {
    "isbn": "9780000000363",
    "title": "Understanding Databases",
    "authors": [
      "John Smith"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/363"
  },
  {
    "isbn": "9780000000364",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "John Smith",
      "Emily Johnson",
      "Sophia Taylor"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/364"
  },
  {
    "isbn": "9780000000365",
    "title": "Advanced Software Engineering",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2021,
    "url": "https://example.com/resource/365"
  },
  {
    "isbn": "9780000000366",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/366"
  },
  {
    "isbn": "9780000000367",
    "title": "Understanding Databases",
    "authors": [
      "Daniel Thomas",
      "Emma White",
      "Sarah Davis"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/367"
  },
  {
    "isbn": "9780000000368",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/368"
  },
  {
    "isbn": "9780000000369",
    "title": "Advanced Machine Learning",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2022,
    "url": "https://example.com/resource/369"
  },
  {
    "isbn": "9780000000370",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/370"
  },
  {
    "isbn": "9780000000371",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/371"
  },
  {
    "isbn": "9780000000372",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Olivia Moore",
      "Laura Martinez",
      "James Anderson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/372"
  },
  {
    "isbn": "9780000000373",
    "title": "Concepts in Cloud Computing",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/373"
  },
  {
    "isbn": "9780000000374",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/374"
  },
  {
    "isbn": "9780000000375",
    "title": "Concepts in Computer Science",
    "authors": [
      "Laura Martinez",
      "Chris Martin"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/375"
  },
  {
    "isbn": "9780000000376",
    "title": "Introduction to Software Engineering",
    "authors": [
      "James Anderson",
      "Chris Martin",
      "David Wilson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/376"
  },
  {
    "isbn": "9780000000377",
    "title": "Practical Guide to Databases",
    "authors": [
      "Michael Brown",
      "Chris Martin"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/377"
  },
  {
    "isbn": "9780000000378",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "John Smith",
      "Michael Brown",
      "Olivia Moore"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/378"
  },
  {
    "isbn": "9780000000379",
    "title": "Concepts in Databases",
    "authors": [
      "Emma White",
      "James Anderson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/379"
  },
  {
    "isbn": "9780000000380",
    "title": "Understanding Cyber Security",
    "authors": [
      "David Wilson",
      "Emily Johnson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/380"
  },
  {
    "isbn": "9780000000381",
    "title": "Concepts in Networking",
    "authors": [
      "Chris Martin",
      "Laura Martinez"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/381"
  },
  {
    "isbn": "9780000000382",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Michael Brown",
      "Emily Johnson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/382"
  },
  {
    "isbn": "9780000000383",
    "title": "Understanding Cloud Computing",
    "authors": [
      "James Anderson",
      "Sophia Taylor",
      "David Wilson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2003,
    "url": "https://example.com/resource/383"
  },
  {
    "isbn": "9780000000384",
    "title": "Concepts in Cyber Security",
    "authors": [
      "Daniel Thomas",
      "Emma White"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/384"
  },
  {
    "isbn": "9780000000385",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Emma White",
      "David Wilson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/385"
  },
  {
    "isbn": "9780000000386",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/386"
  },
  {
    "isbn": "9780000000387",
    "title": "Concepts in Operating Systems",
    "authors": [
      "Sarah Davis",
      "James Anderson",
      "Chris Martin"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/387"
  },
  {
    "isbn": "9780000000388",
    "title": "Advanced Cyber Security",
    "authors": [
      "Laura Martinez",
      "Emma White"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/388"
  },
  {
    "isbn": "9780000000389",
    "title": "Practical Guide to Databases",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/389"
  },
  {
    "isbn": "9780000000390",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Laura Martinez",
      "Sophia Taylor",
      "David Wilson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/390"
  },
  {
    "isbn": "9780000000391",
    "title": "Advanced Cloud Computing",
    "authors": [
      "James Anderson",
      "Olivia Moore",
      "Michael Brown"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/391"
  },
  {
    "isbn": "9780000000392",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "Sarah Davis",
      "Emily Johnson",
      "Laura Martinez"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/392"
  },
  {
    "isbn": "9780000000393",
    "title": "Advanced Data Science",
    "authors": [
      "David Wilson",
      "Emily Johnson",
      "Chris Martin"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/393"
  },
  {
    "isbn": "9780000000394",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Olivia Moore",
      "Sophia Taylor"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/394"
  },
  {
    "isbn": "9780000000395",
    "title": "Advanced Software Engineering",
    "authors": [
      "John Smith",
      "James Anderson",
      "Sophia Taylor"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/395"
  },
  {
    "isbn": "9780000000396",
    "title": "Practical Guide to Networking",
    "authors": [
      "Michael Brown",
      "John Smith",
      "Emily Johnson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/396"
  },
  {
    "isbn": "9780000000397",
    "title": "Concepts in Cyber Security",
    "authors": [
      "Emma White",
      "John Smith"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2013,
    "url": "https://example.com/resource/397"
  },
  {
    "isbn": "9780000000398",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/398"
  },
  {
    "isbn": "9780000000399",
    "title": "Understanding Operating Systems",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/399"
  },
  {
    "isbn": "9780000000400",
    "title": "Advanced Data Science",
    "authors": [
      "John Smith"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/400"
  },
  {
    "isbn": "9780000000401",
    "title": "Advanced Networking",
    "authors": [
      "Emma White"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/401"
  },
  {
    "isbn": "9780000000402",
    "title": "Advanced Computer Science",
    "authors": [
      "Daniel Thomas",
      "John Smith"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/402"
  },
  {
    "isbn": "9780000000403",
    "title": "Fundamentals of Cloud Computing",
    "authors": [
      "Sarah Davis",
      "Olivia Moore",
      "James Anderson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2021,
    "url": "https://example.com/resource/403"
  },
  {
    "isbn": "9780000000404",
    "title": "Advanced Operating Systems",
    "authors": [
      "Olivia Moore",
      "Michael Brown"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/404"
  },
  {
    "isbn": "9780000000405",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/405"
  },
  {
    "isbn": "9780000000406",
    "title": "Advanced Operating Systems",
    "authors": [
      "James Anderson",
      "Emma White"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/406"
  },
  {
    "isbn": "9780000000407",
    "title": "Advanced Computer Science",
    "authors": [
      "Emily Johnson",
      "David Wilson",
      "Olivia Moore"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/407"
  },
  {
    "isbn": "9780000000408",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Emma White",
      "David Wilson",
      "Chris Martin"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/408"
  },
  {
    "isbn": "9780000000409",
    "title": "Concepts in Operating Systems",
    "authors": [
      "Sophia Taylor",
      "Daniel Thomas"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/409"
  },
  {
    "isbn": "9780000000410",
    "title": "Fundamentals of Networking",
    "authors": [
      "Olivia Moore",
      "Laura Martinez",
      "Sophia Taylor"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/410"
  },
  {
    "isbn": "9780000000411",
    "title": "Advanced Cloud Computing",
    "authors": [
      "Olivia Moore",
      "Michael Brown",
      "John Smith"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/411"
  },
  {
    "isbn": "9780000000412",
    "title": "Concepts in Data Science",
    "authors": [
      "Michael Brown",
      "John Smith",
      "Laura Martinez"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/412"
  },
  {
    "isbn": "9780000000413",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/413"
  },
  {
    "isbn": "9780000000414",
    "title": "Advanced Cyber Security",
    "authors": [
      "Laura Martinez",
      "James Anderson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/414"
  },
  {
    "isbn": "9780000000415",
    "title": "Advanced Computer Science",
    "authors": [
      "Sarah Davis",
      "David Wilson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/415"
  },
  {
    "isbn": "9780000000416",
    "title": "Concepts in Machine Learning",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/416"
  },
  {
    "isbn": "9780000000417",
    "title": "Understanding Data Science",
    "authors": [
      "James Anderson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/417"
  },
  {
    "isbn": "9780000000418",
    "title": "Understanding Software Engineering",
    "authors": [
      "Chris Martin",
      "John Smith",
      "Michael Brown"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/418"
  },
  {
    "isbn": "9780000000419",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/419"
  },
  {
    "isbn": "9780000000420",
    "title": "Introduction to Databases",
    "authors": [
      "Sarah Davis",
      "David Wilson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/420"
  },
  {
    "isbn": "9780000000421",
    "title": "Advanced Machine Learning",
    "authors": [
      "Chris Martin",
      "James Anderson",
      "John Smith"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/421"
  },
  {
    "isbn": "9780000000422",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "Chris Martin",
      "Laura Martinez"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/422"
  },
  {
    "isbn": "9780000000423",
    "title": "Understanding Operating Systems",
    "authors": [
      "John Smith",
      "David Wilson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/423"
  },
  {
    "isbn": "9780000000424",
    "title": "Practical Guide to Cyber Security",
    "authors": [
      "Michael Brown",
      "Daniel Thomas"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/424"
  },
  {
    "isbn": "9780000000425",
    "title": "Introduction to Data Science",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2015,
    "url": "https://example.com/resource/425"
  },
  {
    "isbn": "9780000000426",
    "title": "Advanced Cyber Security",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/426"
  },
  {
    "isbn": "9780000000427",
    "title": "Understanding Operating Systems",
    "authors": [
      "Laura Martinez",
      "James Anderson",
      "Daniel Thomas"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/427"
  },
  {
    "isbn": "9780000000428",
    "title": "Practical Guide to Machine Learning",
    "authors": [
      "Laura Martinez",
      "Sophia Taylor",
      "David Wilson"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/428"
  },
  {
    "isbn": "9780000000429",
    "title": "Fundamentals of Operating Systems",
    "authors": [
      "Sarah Davis",
      "David Wilson",
      "John Smith"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/429"
  },
  {
    "isbn": "9780000000430",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "Michael Brown",
      "Sarah Davis"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/430"
  },
  {
    "isbn": "9780000000431",
    "title": "Concepts in Data Science",
    "authors": [
      "Laura Martinez",
      "Chris Martin"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2010,
    "url": "https://example.com/resource/431"
  },
  {
    "isbn": "9780000000432",
    "title": "Introduction to Cyber Security",
    "authors": [
      "John Smith",
      "Sophia Taylor"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/432"
  },
  {
    "isbn": "9780000000433",
    "title": "Practical Guide to Databases",
    "authors": [
      "Olivia Moore",
      "David Wilson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/433"
  },
  {
    "isbn": "9780000000434",
    "title": "Understanding Cloud Computing",
    "authors": [
      "Laura Martinez",
      "Olivia Moore"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/434"
  },
  {
    "isbn": "9780000000435",
    "title": "Introduction to Data Science",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2014,
    "url": "https://example.com/resource/435"
  },
  {
    "isbn": "9780000000436",
    "title": "Understanding Machine Learning",
    "authors": [
      "James Anderson",
      "Laura Martinez",
      "Emma White"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/436"
  },
  {
    "isbn": "9780000000437",
    "title": "Advanced Data Science",
    "authors": [
      "Chris Martin",
      "James Anderson",
      "Emily Johnson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/437"
  },
  {
    "isbn": "9780000000438",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/438"
  },
  {
    "isbn": "9780000000439",
    "title": "Concepts in Data Science",
    "authors": [
      "Emily Johnson",
      "Daniel Thomas",
      "David Wilson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/439"
  },
  {
    "isbn": "9780000000440",
    "title": "Practical Guide to Software Engineering",
    "authors": [
      "Emily Johnson",
      "Olivia Moore",
      "Michael Brown"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/440"
  },
  {
    "isbn": "9780000000441",
    "title": "Practical Guide to Machine Learning",
    "authors": [
      "Laura Martinez",
      "Daniel Thomas"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/441"
  },
  {
    "isbn": "9780000000442",
    "title": "Fundamentals of Data Science",
    "authors": [
      "John Smith"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2023,
    "url": "https://example.com/resource/442"
  },
  {
    "isbn": "9780000000443",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Sophia Taylor",
      "Emma White",
      "James Anderson"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/443"
  },
  {
    "isbn": "9780000000444",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "James Anderson",
      "Michael Brown"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/444"
  },
  {
    "isbn": "9780000000445",
    "title": "Understanding Cyber Security",
    "authors": [
      "Emma White",
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/445"
  },
  {
    "isbn": "9780000000446",
    "title": "Concepts in Operating Systems",
    "authors": [
      "Laura Martinez",
      "Sarah Davis",
      "Michael Brown"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/446"
  },
  {
    "isbn": "9780000000447",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "Emily Johnson",
      "David Wilson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2021,
    "url": "https://example.com/resource/447"
  },
  {
    "isbn": "9780000000448",
    "title": "Advanced Computer Science",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/448"
  },
  {
    "isbn": "9780000000449",
    "title": "Concepts in Software Engineering",
    "authors": [
      "Laura Martinez",
      "Sarah Davis",
      "James Anderson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/449"
  },
  {
    "isbn": "9780000000450",
    "title": "Introduction to Networking",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2018,
    "url": "https://example.com/resource/450"
  },
  {
    "isbn": "9780000000451",
    "title": "Understanding Data Science",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/451"
  },
  {
    "isbn": "9780000000452",
    "title": "Introduction to Machine Learning",
    "authors": [
      "David Wilson"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/452"
  },
  {
    "isbn": "9780000000453",
    "title": "Understanding Machine Learning",
    "authors": [
      "Sophia Taylor",
      "Emily Johnson"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/453"
  },
  {
    "isbn": "9780000000454",
    "title": "Understanding Software Engineering",
    "authors": [
      "Olivia Moore"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/454"
  },
  {
    "isbn": "9780000000455",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Sophia Taylor",
      "Laura Martinez",
      "David Wilson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/455"
  },
  {
    "isbn": "9780000000456",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "David Wilson",
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/456"
  },
  {
    "isbn": "9780000000457",
    "title": "Introduction to Operating Systems",
    "authors": [
      "Laura Martinez",
      "Olivia Moore"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/457"
  },
  {
    "isbn": "9780000000458",
    "title": "Practical Guide to Networking",
    "authors": [
      "Emma White"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/458"
  },
  {
    "isbn": "9780000000459",
    "title": "Introduction to Machine Learning",
    "authors": [
      "Michael Brown",
      "Sophia Taylor"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2005,
    "url": "https://example.com/resource/459"
  },
  {
    "isbn": "9780000000460",
    "title": "Introduction to Cyber Security",
    "authors": [
      "Daniel Thomas",
      "Laura Martinez"
    ],
    "subject": "Cyber Security",
    "description": "A comprehensive resource on cyber security covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/460"
  },
  {
    "isbn": "9780000000461",
    "title": "Introduction to Data Science",
    "authors": [
      "Emma White",
      "Laura Martinez",
      "Emily Johnson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2007,
    "url": "https://example.com/resource/461"
  },
  {
    "isbn": "9780000000462",
    "title": "Concepts in Computer Science",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/462"
  },
  {
    "isbn": "9780000000463",
    "title": "Understanding Software Engineering",
    "authors": [
      "John Smith",
      "David Wilson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/463"
  },
  {
    "isbn": "9780000000464",
    "title": "Advanced Computer Science",
    "authors": [
      "Sarah Davis"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/464"
  },
  {
    "isbn": "9780000000465",
    "title": "Understanding Computer Science",
    "authors": [
      "Emily Johnson"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/465"
  },
  {
    "isbn": "9780000000466",
    "title": "Practical Guide to Data Science",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/466"
  },
  {
    "isbn": "9780000000467",
    "title": "Introduction to Artificial Intelligence",
    "authors": [
      "James Anderson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/467"
  },
  {
    "isbn": "9780000000468",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "Emily Johnson",
      "Emma White"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2001,
    "url": "https://example.com/resource/468"
  },
  {
    "isbn": "9780000000469",
    "title": "Concepts in Machine Learning",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/469"
  },
  {
    "isbn": "9780000000470",
    "title": "Advanced Operating Systems",
    "authors": [
      "Sarah Davis",
      "Emily Johnson"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2006,
    "url": "https://example.com/resource/470"
  },
  {
    "isbn": "9780000000471",
    "title": "Fundamentals of Machine Learning",
    "authors": [
      "Laura Martinez"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/471"
  },
  {
    "isbn": "9780000000472",
    "title": "Concepts in Databases",
    "authors": [
      "Michael Brown"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/472"
  },
  {
    "isbn": "9780000000473",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "Sophia Taylor",
      "Daniel Thomas",
      "Michael Brown"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/473"
  },
  {
    "isbn": "9780000000474",
    "title": "Advanced Operating Systems",
    "authors": [
      "Emma White"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/474"
  },
  {
    "isbn": "9780000000475",
    "title": "Introduction to Data Science",
    "authors": [
      "David Wilson",
      "Chris Martin",
      "Michael Brown"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/475"
  },
  {
    "isbn": "9780000000476",
    "title": "Understanding Operating Systems",
    "authors": [
      "Sophia Taylor"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/476"
  },
  {
    "isbn": "9780000000477",
    "title": "Advanced Machine Learning",
    "authors": [
      "Daniel Thomas",
      "Michael Brown",
      "Sarah Davis"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 2002,
    "url": "https://example.com/resource/477"
  },
  {
    "isbn": "9780000000478",
    "title": "Practical Guide to Cloud Computing",
    "authors": [
      "David Wilson",
      "Michael Brown"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2019,
    "url": "https://example.com/resource/478"
  },
  {
    "isbn": "9780000000479",
    "title": "Concepts in Data Science",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/479"
  },
  {
    "isbn": "9780000000480",
    "title": "Practical Guide to Operating Systems",
    "authors": [
      "Chris Martin",
      "Sarah Davis"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/480"
  },
  {
    "isbn": "9780000000481",
    "title": "Fundamentals of Computer Science",
    "authors": [
      "Laura Martinez",
      "David Wilson",
      "Michael Brown"
    ],
    "subject": "Computer Science",
    "description": "A comprehensive resource on computer science covering key principles and real-world applications.",
    "year": 2011,
    "url": "https://example.com/resource/481"
  },
  {
    "isbn": "9780000000482",
    "title": "Introduction to Software Engineering",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2020,
    "url": "https://example.com/resource/482"
  },
  {
    "isbn": "9780000000483",
    "title": "Introduction to Networking",
    "authors": [
      "Michael Brown",
      "Emily Johnson"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2012,
    "url": "https://example.com/resource/483"
  },
  {
    "isbn": "9780000000484",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "David Wilson",
      "Olivia Moore",
      "Emily Johnson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/484"
  },
  {
    "isbn": "9780000000485",
    "title": "Practical Guide to Databases",
    "authors": [
      "David Wilson",
      "Michael Brown",
      "Laura Martinez"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/485"
  },
  {
    "isbn": "9780000000486",
    "title": "Advanced Machine Learning",
    "authors": [
      "Daniel Thomas"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 1999,
    "url": "https://example.com/resource/486"
  },
  {
    "isbn": "9780000000487",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "Chris Martin"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 1997,
    "url": "https://example.com/resource/487"
  },
  {
    "isbn": "9780000000488",
    "title": "Fundamentals of Data Science",
    "authors": [
      "Sophia Taylor",
      "James Anderson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2008,
    "url": "https://example.com/resource/488"
  },
  {
    "isbn": "9780000000489",
    "title": "Practical Guide to Artificial Intelligence",
    "authors": [
      "John Smith"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2024,
    "url": "https://example.com/resource/489"
  },
  {
    "isbn": "9780000000490",
    "title": "Introduction to Cloud Computing",
    "authors": [
      "Chris Martin",
      "James Anderson"
    ],
    "subject": "Cloud Computing",
    "description": "A comprehensive resource on cloud computing covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/490"
  },
  {
    "isbn": "9780000000491",
    "title": "Concepts in Networking",
    "authors": [
      "Emily Johnson",
      "Sophia Taylor",
      "Sarah Davis"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 1998,
    "url": "https://example.com/resource/491"
  },
  {
    "isbn": "9780000000492",
    "title": "Practical Guide to Networking",
    "authors": [
      "Michael Brown",
      "Chris Martin",
      "Olivia Moore"
    ],
    "subject": "Networking",
    "description": "A comprehensive resource on networking covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/492"
  },
  {
    "isbn": "9780000000493",
    "title": "Introduction to Machine Learning",
    "authors": [
      "Laura Martinez",
      "Daniel Thomas"
    ],
    "subject": "Machine Learning",
    "description": "A comprehensive resource on machine learning covering key principles and real-world applications.",
    "year": 1996,
    "url": "https://example.com/resource/493"
  },
  {
    "isbn": "9780000000494",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "James Anderson",
      "Michael Brown"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2017,
    "url": "https://example.com/resource/494"
  },
  {
    "isbn": "9780000000495",
    "title": "Understanding Artificial Intelligence",
    "authors": [
      "Chris Martin",
      "James Anderson"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 1995,
    "url": "https://example.com/resource/495"
  },
  {
    "isbn": "9780000000496",
    "title": "Concepts in Artificial Intelligence",
    "authors": [
      "Sophia Taylor",
      "Michael Brown",
      "John Smith"
    ],
    "subject": "Artificial Intelligence",
    "description": "A comprehensive resource on artificial intelligence covering key principles and real-world applications.",
    "year": 2000,
    "url": "https://example.com/resource/496"
  },
  {
    "isbn": "9780000000497",
    "title": "Introduction to Databases",
    "authors": [
      "Chris Martin",
      "David Wilson"
    ],
    "subject": "Databases",
    "description": "A comprehensive resource on databases covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/497"
  },
  {
    "isbn": "9780000000498",
    "title": "Concepts in Data Science",
    "authors": [
      "Emma White",
      "Sophia Taylor",
      "David Wilson"
    ],
    "subject": "Data Science",
    "description": "A comprehensive resource on data science covering key principles and real-world applications.",
    "year": 2004,
    "url": "https://example.com/resource/498"
  },
  {
    "isbn": "9780000000499",
    "title": "Advanced Operating Systems",
    "authors": [
      "Emma White",
      "Sophia Taylor"
    ],
    "subject": "Operating Systems",
    "description": "A comprehensive resource on operating systems covering key principles and real-world applications.",
    "year": 2009,
    "url": "https://example.com/resource/499"
  },
  {
    "isbn": "9780000000500",
    "title": "Practical Guide to Software Engineering",
    "authors": [
      "James Anderson",
      "Chris Martin",
      "David Wilson"
    ],
    "subject": "Software Engineering",
    "description": "A comprehensive resource on software engineering covering key principles and real-world applications.",
    "year": 2016,
    "url": "https://example.com/resource/500"
  }
]

module.exports = booksToInsert