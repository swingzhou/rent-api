define({ "api": [
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseServiceRest/listLeaseServices",
    "title": "分页获取租约服务列表",
    "name": "listLeaseServices",
    "group": "LeaseServiceRestController",
    "description": "<p>分页获取租约服务列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名 单号id/设备sn deviceSn/创建人名称createManName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"createDateEnd\": 0,\n    \"createDateStart\": 0,\n    \"queryFieldName\": \"string\",\n    \"queryValue\": \"string\"\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"string\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createManName",
            "description": "<p>创建者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>单号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.rentPeriod",
            "description": "<p>续租租期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"createDate\": 0,\n        \"createMan\": \"string\",\n        \"createManName\": \"string\",\n        \"deviceSn\": \"string\",\n        \"id\": \"string\",\n        \"rentPeriod\": 0\n      }\n    ]\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-25T10:49:34.087Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000003",
            "description": "<p>查询字段为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20216001",
            "description": "<p>获取租约服务订单列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseServiceRestController.java",
    "groupTitle": "LeaseServiceRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/cancelServicePackPreorder/{orderPackId}",
    "title": "取消订单服务包预购",
    "name": "cancelServicePackPreorder",
    "group": "SaleRentOrderRestController",
    "description": "<p>取消订单服务包预购</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderPackId",
            "description": "<p>订单服务包标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"responseTime\": \"2019-01-25T09:47:06.612+0000\",\n  \"code\": \"000000\",\n  \"status\": \"200\",\n  \"msg\": \"请求成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215019",
            "description": "<p>订单服务包关联标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215022",
            "description": "<p>获取订单的服务包信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215020",
            "description": "<p>订单所对应的服务包不存在</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215021",
            "description": "<p>订单所对应的服务包状态不是预购状态</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/getCivilSaleRentOrderInfo/{orderId}",
    "title": "获取民用售租订单详情",
    "name": "getCivilSaleRentOrderInfo",
    "group": "SaleRentOrderRestController",
    "description": "<p>获取民用售租订单详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.acceptAddress",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.amount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.comment",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createManName",
            "description": "<p>创建者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerCode",
            "description": "<p>经销商编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerLevel",
            "description": "<p>经销商级别</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.logisticsBillId",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderStatus",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderType",
            "description": "<p>订单类型 直租订单DIRECT_RENT/商用售租订单COMMERCIAL_SALE_RENT/民用售租订单CIVIL_SALE_RENT/续租订单RERENT/换机订单CHANGE/租约调整订单LEASE_ADJUST/换机工单CHANGE_WORK_ORDER/退租申请单THROW_LEASE/租约服务订单LEASE_SERVICE</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productOrderId",
            "description": "<p>产品订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.saleRentProducts",
            "description": "<p>售租产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentProducts.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.saleRentProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentProducts.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"acceptAddress\": \"string\",\n    \"amount\": 0,\n    \"checkId\": \"string\",\n    \"comment\": \"string\",\n    \"consignee\": \"string\",\n    \"contactNum\": \"string\",\n    \"createDate\": 0,\n    \"createMan\": \"string\",\n    \"createManName\": \"string\",\n    \"dealerCode\": \"string\",\n    \"dealerId\": \"string\",\n    \"dealerLevel\": \"A\",\n    \"dealerName\": \"string\",\n    \"id\": \"string\",\n    \"logisticsBillId\": \"string\",\n    \"orderStatus\": \"PENDING_CHECK\",\n    \"orderType\": \"DIRECT_RENT\",\n    \"productOrderId\": \"string\",\n    \"saleRentProducts\": [\n      {\n        \"amount\": 0,\n        \"number\": 0,\n        \"productId\": \"string\",\n        \"productModel\": \"string\",\n        \"productName\": \"string\",\n        \"productPn\": \"string\",\n        \"unit\": \"TAI\",\n        \"unitPrice\": 0\n      }\n    ]\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-25T02:03:46.604Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215003",
            "description": "<p>获取售租订单详情失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20101006",
            "description": "<p>获取订单信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215015",
            "description": "<p>获取售租订单产品列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/getSaleRentOrderInfo/{orderId}",
    "title": "查询商用售租订单详情",
    "name": "getSaleRentOrderInfo",
    "group": "SaleRentOrderRestController",
    "description": "<p>查询商用售租订单详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>售租订单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.acceptAddress",
            "description": "<p>收货地址</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.amount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.checkId",
            "description": "<p>审核标识，根据该审核标识查询审核状态</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.comment",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createManName",
            "description": "<p>下单员名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerCode",
            "description": "<p>经销商编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerLevel",
            "description": "<p>经销商级别</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.logisticsBillId",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderStatus",
            "description": "<p>订单状态 PENDING_CHECK待审核/PENDING_SHIP待出货/FINISHED已完成/CLOSED已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderType",
            "description": "<p>订单类型 直租订单DIRECT_RENT/商用售租订单COMMERCIAL_SALE_RENT/民用售租订单CIVIL_SALE_RENT/续租订单RERENT/换机订单CHANGE/租约调整订单LEASE_ADJUST/换机工单CHANGE_WORK_ORDER/退租申请单THROW_LEASE/租约服务订单LEASE_SERVICE</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.packAmount",
            "description": "<p>服务包合计</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.packOrderId",
            "description": "<p>服务包订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.productAmount",
            "description": "<p>产品合计</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productOrderId",
            "description": "<p>产品订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.saleRentProducts",
            "description": "<p>产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentProducts.amount",
            "description": "<p>产品总额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.saleRentProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productModel",
            "description": "<p>型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentProducts.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentProducts.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.saleRentSerivcePacks",
            "description": "<p>服务包信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentSerivcePacks.amount",
            "description": "<p>服务包总额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.saleRentSerivcePacks.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentSerivcePacks.packId",
            "description": "<p>服务包标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentSerivcePacks.packName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.saleRentSerivcePacks.packPeriod",
            "description": "<p>服务期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentSerivcePacks.packPn",
            "description": "<p>服务包料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentSerivcePacks.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentSerivcePacks.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"acceptAddress\": \"string\",\n    \"amount\": 0,\n    \"checkId\": \"string\",\n    \"comment\": \"string\",\n    \"consignee\": \"string\",\n    \"contactNum\": \"string\",\n    \"createDate\": 0,\n    \"createMan\": \"string\",\n    \"createManName\": \"string\",\n    \"dealerCode\": \"string\",\n    \"dealerId\": \"string\",\n    \"dealerLevel\": \"A\",\n    \"dealerName\": \"string\",\n    \"id\": \"string\",\n    \"logisticsBillId\": \"string\",\n    \"orderStatus\": \"PENDING_CHECK\",\n    \"orderType\": \"DIRECT_RENT\",\n    \"packAmount\": 0,\n    \"packOrderId\": \"string\",\n    \"productAmount\": 0,\n    \"productOrderId\": \"string\",\n    \"saleRentProducts\": [\n      {\n        \"amount\": 0,\n        \"number\": 0,\n        \"productId\": \"string\",\n        \"productModel\": \"string\",\n        \"productName\": \"string\",\n        \"productPn\": \"string\",\n        \"unit\": \"TAI\",\n        \"unitPrice\": 0\n      }\n    ],\n    \"saleRentSerivcePacks\": [\n      {\n        \"amount\": 0,\n        \"number\": 0,\n        \"packId\": \"string\",\n        \"packName\": \"string\",\n        \"packPeriod\": 0,\n        \"packPn\": \"string\",\n        \"unit\": \"TAI\",\n        \"unitPrice\": 0\n      }\n    ]\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-20T11:04:59.312Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215003",
            "description": "<p>获取售租订单详情失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215015",
            "description": "<p>获取售租订单产品列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215014",
            "description": "<p>获取售租订单服务包列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/listCivilSaleOrderDevices/{orderId}",
    "title": "获取民用售租设备列表",
    "name": "listCivilSaleOrderDevices",
    "group": "SaleRentOrderRestController",
    "description": "<p>获取民用售租设备列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": [\n    {\n      \"batNum\": \"string\",\n      \"deviceId\": \"string\",\n      \"deviceSn\": \"string\",\n      \"productId\": \"string\",\n      \"productName\": \"string\"\n    }\n  ],\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-25T02:13:03.173Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215013",
            "description": "<p>获取售租订单设备明细列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/listCivilSaleOrderPacks/{orderId}",
    "title": "获取民用售租订单服务包列表",
    "name": "listCivilSaleOrderPacks",
    "group": "SaleRentOrderRestController",
    "description": "<p>获取民用售租订单服务包列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.cancelDate",
            "description": "<p>取消时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.cancelMan",
            "description": "<p>取消人标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.cancelManName",
            "description": "<p>取消人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.packName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.packPeriod",
            "description": "<p>服务期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.packSn",
            "description": "<p>服务包料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.packStatus",
            "description": "<p>服务包状态</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.purchaseDate",
            "description": "<p>购买时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": [\n    {\n      \"amount\": 0,\n      \"cancelDate\": 0,\n      \"cancelMan\": \"string\",\n      \"cancelManName\": \"string\",\n      \"packName\": \"string\",\n      \"packPeriod\": 0,\n      \"packSn\": \"string\",\n      \"packStatus\": \"PURCHASED\",\n      \"purchaseDate\": 0\n    }\n  ],\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-25T02:09:29.728Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215014",
            "description": "<p>获取售租订单服务包列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/listCivilSaleRentOrders",
    "title": "查询民用售租订单列表",
    "name": "listCivilSaleRentOrders",
    "group": "SaleRentOrderRestController",
    "description": "<p>查询民用售租订单列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.orderStatus",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>订单号id/产品名称productName/经销商名称dealerName/下单员createManName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"createDateEnd\": 0,\n    \"createDateStart\": 0,\n    \"orderStatus\": \"PENDING_CHECK\",\n    \"queryFieldName\": \"string\",\n    \"queryValue\": \"string\"\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"string\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.amount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createManName",
            "description": "<p>创建者名称/下单员名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderStatus",
            "description": "<p>订单状态 待审核PENDING_CHECK/待出货PENDING_SHIP/已完成FINISHED/已关闭CLOSED</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.saleRentProducts",
            "description": "<p>售租产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentProducts.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.saleRentProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentProducts.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"amount\": 0,\n        \"createDate\": 0,\n        \"createMan\": \"string\",\n        \"createManName\": \"string\",\n        \"dealerId\": \"string\",\n        \"dealerName\": \"string\",\n        \"id\": \"string\",\n        \"orderStatus\": \"PENDING_CHECK\",\n        \"saleRentProducts\": [\n          {\n            \"amount\": 0,\n            \"number\": 0,\n            \"productId\": \"string\",\n            \"productModel\": \"string\",\n            \"productName\": \"string\",\n            \"productPn\": \"string\",\n            \"unit\": \"TAI\",\n            \"unitPrice\": 0\n          }\n        ]\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-25T01:46:54.487Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000003",
            "description": "<p>查询字段为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215015",
            "description": "<p>获取售租订单产品列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215001",
            "description": "<p>获取售租订单列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/listOrderStatusDetails/{orderId}",
    "title": "获取商用售租订单状态明细列表",
    "name": "listOrderStatusDetails",
    "group": "SaleRentOrderRestController",
    "description": "<p>获取商用售租订单状态明细列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.finished",
            "description": "<p>是否是终止状态</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createMan",
            "description": "<p>操作人标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createManName",
            "description": "<p>操作人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.operStatus",
            "description": "<p>操作状态</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.operType",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": [\n    {\n      \"finished\": true,\n      \"createDate\": 0,\n      \"createMan\": \"string\",\n      \"createManName\": \"string\",\n      \"operStatus\": \"ORDER_CREATE\",\n      \"operType\": \"CREATE\"\n    }\n  ],\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-19T01:44:14.204Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215007",
            "description": "<p>获取售租订单状态记录列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215008",
            "description": "<p>获取售租订单状态明细失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215009",
            "description": "<p>订单状态明细为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/listSaleOrderDevices",
    "title": "查询商用售租订单关联的设备明细",
    "name": "listSaleOrderDevices",
    "group": "SaleRentOrderRestController",
    "description": "<p>查询商用售租订单关联的设备明细</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "productName",
            "description": "<p>产品名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"deviceSn\": \"string\",\n  \"id\": \"string\",\n  \"productName\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.batNum",
            "description": "<p>批号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": [\n    {\n      \"batNum\": \"string\",\n      \"deviceId\": \"string\",\n      \"deviceSn\": \"string\",\n      \"productId\": \"string\",\n      \"productName\": \"string\"\n    }\n  ],\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-20T11:12:16.757Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215013",
            "description": "<p>获取售租订单设备明细列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/listSaleRentOrderAccountPeriodInfo/{orderId}",
    "title": "获取商用售租订单账期信息列表",
    "name": "listSaleRentOrderAccountPeriodInfo",
    "group": "SaleRentOrderRestController",
    "description": "<p>获取商用售租订单账期信息列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.accountDetails",
            "description": "<p>账期明细</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.accountDetails.acceptMoney",
            "description": "<p>已回款</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.accountDetails.id",
            "description": "<p>账期明细标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.accountDetails.orderAccountId",
            "description": "<p>账期信息标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.accountDetails.payDate",
            "description": "<p>回款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.accountDetails.payMoney",
            "description": "<p>账期金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.accountDetails.payNode",
            "description": "<p>回款节点，单位为月</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.accountDetails.payRadio",
            "description": "<p>回款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.accountDetails.periodOrder",
            "description": "<p>期数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.accountDetails.status",
            "description": "<p>状态,未开始NOT_START/已完成FINISHED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.accountPeriodId",
            "description": "<p>账期编号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.amount",
            "description": "<p>账期总额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.endDate",
            "description": "<p>账期结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.period",
            "description": "<p>账期期限，单位为月</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.receivedMoney",
            "description": "<p>已回款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.remainMoney",
            "description": "<p>未回款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.startDate",
            "description": "<p>账期起始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>账期信息状态,进行中RUNNING/已完成FINISHED/已关闭CLOSED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"accountDetails\": [\n      {\n        \"acceptMoney\": 0,\n        \"id\": \"string\",\n        \"orderAccountId\": \"string\",\n        \"payDate\": 0,\n        \"payMoney\": 0,\n        \"payNode\": 0,\n        \"payRadio\": 0,\n        \"periodOrder\": 0,\n        \"status\": \"NOT_START\"\n      }\n    ],\n    \"accountPeriodId\": \"string\",\n    \"amount\": 0,\n    \"endDate\": 0,\n    \"name\": \"string\",\n    \"period\": 0,\n    \"receivedMoney\": 0,\n    \"remainMoney\": 0,\n    \"status\": \"RUNNING\"\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-20T11:22:03.897Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215010",
            "description": "<p>获取订单账期信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215011",
            "description": "<p>订单账期信息为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/listSaleRentOrders",
    "title": "分页查询商用售租订单列表",
    "name": "listSaleRentOrders",
    "group": "SaleRentOrderRestController",
    "description": "<p>分页查询商用售租订单列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateEnd",
            "description": "<p>创建日期起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateStart",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.orderStatus",
            "description": "<p>订单状态 PENDING_CHECK待审核/PENDING_SHIP待出货/FINISHED已完成/CLOSED已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名称    packOrderId服务包订单号/productOrderId产品订单号/productName产品名称/dealerName经销商名称/createManName下单员名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"createDate\": \"desc\"\n    }\n  ],\n  \"query\": {\n    \"createDateEnd\": 0,\n    \"createDateStart\": 0,\n    \"orderStatus\": \"PENDING_CHECK\",\n    \"queryFieldName\": \"packOrderId\",\n    \"queryValue\": \"string\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.amount",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createManName",
            "description": "<p>创建者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderStatus",
            "description": "<p>订单状态 PENDING_CHECK/PENDING_SHIP/FINISHED/CLOSED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.packOrderId",
            "description": "<p>服务包订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productOrderId",
            "description": "<p>产品订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.saleRentProducts",
            "description": "<p>产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.saleRentProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentProducts.unit",
            "description": "<p>设备单位 TAI台</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentProducts.unitPrice",
            "description": "<p>产品单价</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.saleRentSerivcePacks",
            "description": "<p>服务包信息</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.saleRentSerivcePack.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentSerivcePack.packId",
            "description": "<p>服务包标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentSerivcePack.packName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentSerivcePack.unit",
            "description": "<p>设备单位 TAI台</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentSerivcePack.unitPrice",
            "description": "<p>服务包单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"amount\": 0,\n        \"createDate\": 0,\n        \"createMan\": \"string\",\n        \"createManName\": \"string\",\n        \"dealerId\": \"string\",\n        \"dealerName\": \"string\",\n        \"id\": \"string\",\n        \"orderStatus\": \"PENDING_CHECK\",\n        \"packOrderId\": \"string\",\n        \"productOrderId\": \"string\",\n        \"saleRentProducts\": [\n          {\n            \"number\": 0,\n            \"productId\": \"string\",\n            \"productName\": \"string\",\n            \"unit\": \"TAI\",\n            \"unitPrice\": 0\n          }\n        ],\n        \"saleRentSerivcePack\": [\n          {\n            \"number\": 0,\n            \"packId\": \"string\",\n            \"packName\": \"string\",\n            \"unit\": \"TAI\",\n            \"unitPrice\": 0\n          }\n        ]\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-17T03:40:08.851Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000003",
            "description": "<p>查询字段为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215001",
            "description": "<p>获取售租订单列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/updatelogisticsBillId/{orderId}/{logisticsBillId}",
    "title": "修改商用售租订单物流单号",
    "name": "updatelogisticsBillId",
    "group": "SaleRentOrderRestController",
    "description": "<p>修改商用售租订单物流单号</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "logisticsBillId",
            "description": "<p>物流单号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-19T01:55:01.603Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215002",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215004",
            "description": "<p>物流单号为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215003",
            "description": "<p>获取售租订单详情失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215005",
            "description": "<p>售租订单不存在</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215006",
            "description": "<p>更新物流单号失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/SaleRentOrderRestController.java",
    "groupTitle": "SaleRentOrderRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
