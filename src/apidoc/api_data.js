define({ "api": [
  {
    "type": "get",
    "url": "/api/stats/:airportName",
    "title": "Request for Reviews by AirportName",
    "name": "GetReviewByAirPortName",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "airpotName",
            "optional": false,
            "field": "name",
            "description": "<p>of AirPort.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overall_rating",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recommended",
            "description": "<p>Count of recommendations in Syatem.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author_country",
            "description": "<p>Country of author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"overall_rating\": \"4.55\",\n  \"recommended\": \"5\",\n  \"date\": \"23/04/2016\",\n  \"author_country\": \"Switzerland\",\n  \"content\": \"Transiting via Zurich used to be great. Thanks to Terminal E the whole process is a mess.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AirPlaneReviewByAirportNameController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/api/stats/:airportName",
    "title": "Request for Reviews by AirportName",
    "name": "GetReviewByAirPortName",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "airpotName",
            "optional": false,
            "field": "name",
            "description": "<p>of AirPort.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overall_rating",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recommended",
            "description": "<p>Count of recommendations in Syatem.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author_country",
            "description": "<p>Country of author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"overall_rating\": \"4.55\",\n  \"recommended\": \"5\",\n  \"date\": \"23/04/2016\",\n  \"author_country\": \"Switzerland\",\n  \"content\": \"Transiting via Zurich used to be great. Thanks to Terminal E the whole process is a mess.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AirPlaneReviewByAirportNameController.ts",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/api/all/stats",
    "title": "Request for Airports with Review count",
    "name": "GetStat",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airportName",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfReviews",
            "description": "<p>Count of review in Syatem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"airportName\": \"london-heathrow-airport\",\n  \"countOfReviews\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AirPlaneAllStatController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/api/all/stats",
    "title": "Request for Airports with Review count",
    "name": "GetStat",
    "group": "Reviews",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airportName",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfReviews",
            "description": "<p>Count of review in Syatem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"airportName\": \"london-heathrow-airport\",\n  \"countOfReviews\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AirPlaneAllStatController.ts",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/api/all/stats",
    "title": "Request for Airports with Review count",
    "name": "GetStat",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airportName",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfReviews",
            "description": "<p>Count of review in Syatem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"airportName\": \"london-heathrow-airport\",\n  \"countOfReviews\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AllReviewsOverAllRatingAboveTowController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/api/all/stats",
    "title": "All reviews for Airports with overall_rating more than 2",
    "name": "GetStat",
    "group": "Reviews",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airportName",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfReviews",
            "description": "<p>Count of review in Syatem.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"airportName\": \"london-heathrow-airport\",\n  \"countOfReviews\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AllReviewsOverAllRatingAboveTowController.ts",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/api/stat/:airportName",
    "title": "Request for Stat by AirportName",
    "name": "GetStatByAirPortName",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "airpotName",
            "optional": false,
            "field": "name",
            "description": "<p>of AirPort.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airportName",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfReviews",
            "description": "<p>Count of reviews in System.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overallRating",
            "description": "<p>Over all Rating of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfRecommendation",
            "description": "<p>Count of recommendation author.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"airportName\": \"london-heathrow-airport\",\n  \"countOfReviews\": \"5\",\n  \"overallRating\": \"5.66\",\n  \"countOfRecommendation\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AirPlaneStatByAirportNameController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/api/stat/:airportName",
    "title": "Request for Stat by AirportName",
    "name": "GetStatByAirPortName",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "airpotName",
            "optional": false,
            "field": "name",
            "description": "<p>of AirPort.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airportName",
            "description": "<p>Name of Airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfReviews",
            "description": "<p>Count of reviews in System.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overallRating",
            "description": "<p>Over all Rating of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countOfRecommendation",
            "description": "<p>Count of recommendation author.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"airportName\": \"london-heathrow-airport\",\n  \"countOfReviews\": \"5\",\n  \"overallRating\": \"5.66\",\n  \"countOfRecommendation\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/AirPlaneStatByAirportNameController.ts",
    "groupTitle": "Reviews"
  }
] });
