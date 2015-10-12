var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "990",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "111",
        "ok": "821",
        "ko": "111"
    },
    "maxResponseTime": {
        "total": "58375",
        "ok": "58375",
        "ko": "811"
    },
    "meanResponseTime": {
        "total": "29696",
        "ok": "29992",
        "ko": "346"
    },
    "standardDeviation": {
        "total": "16652",
        "ok": "16472",
        "ko": "260"
    },
    "percentiles1": {
        "total": "29734",
        "ok": "30061",
        "ko": "288"
    },
    "percentiles2": {
        "total": "44059",
        "ok": "44205",
        "ko": "436"
    },
    "percentiles3": {
        "total": "55621",
        "ok": "55683",
        "ko": "810"
    },
    "percentiles4": {
        "total": "57875",
        "ok": "57886",
        "ko": "810"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 986,
        "percentage": 99
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17.019",
        "ok": "16.848",
        "ko": "0.17"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "1000",
        "ok": "990",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "111",
        "ok": "821",
        "ko": "111"
    },
    "maxResponseTime": {
        "total": "58375",
        "ok": "58375",
        "ko": "811"
    },
    "meanResponseTime": {
        "total": "29696",
        "ok": "29992",
        "ko": "346"
    },
    "standardDeviation": {
        "total": "16652",
        "ok": "16472",
        "ko": "260"
    },
    "percentiles1": {
        "total": "29734",
        "ok": "30061",
        "ko": "288"
    },
    "percentiles2": {
        "total": "44059",
        "ok": "44205",
        "ko": "436"
    },
    "percentiles3": {
        "total": "55621",
        "ok": "55683",
        "ko": "810"
    },
    "percentiles4": {
        "total": "57875",
        "ok": "57886",
        "ko": "810"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 986,
        "percentage": 99
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17.019",
        "ok": "16.848",
        "ko": "0.17"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
