define({ "api": [
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrder/listSaleRentOrders",
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
            "description": "<p>查询字段为空 20215001</p>"
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
  }
] });
