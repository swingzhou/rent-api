define({ "api": [
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/addAdjustLeases",
    "title": "创建租约调整单",
    "name": "addAdjustLease",
    "group": "AdjustLeaseController",
    "description": "<p>创建租约调整单</p>",
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
            "field": "duration",
            "description": "<p>租期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reason",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contacts",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telephone",
            "description": "<p>联系方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"deviceId\": \"string\",\n   \"duration\": 0,\n   \"reason\": \"string\",\n   \"deviceSn\": \"string\",\n   \"contacts\": \"string\",\n   \"telephone\": \"string\"\n}",
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
            "type": "object",
            "optional": false,
            "field": "data.leaseAdjustRequestDto",
            "description": "<p>租约调整申请对象</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.checkType",
            "description": "<p>审核类型   PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.createManType",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.duration",
            "description": "<p>调整时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.ownerId",
            "description": "<p>设备拥有者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.ownerType",
            "description": "<p>设备拥有者类型 DEALER(经销商) RENT(租赁平台)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.reason",
            "description": "<p>申请原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.statusDate",
            "description": "<p>状态变更时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.contacts",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.telephone",
            "description": "<p>联系方式</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"leaseAdjustRequestDto\": {\n       \"checkId\": \"string\",\n       \"checkType\": \"UNDER_REVIEW\",\n       \"createDate\": 0,\n       \"createMan\": \"string\",\n       \"createManType\": \"UNKOWN\",\n       \"deviceId\": \"string\",\n       \"deviceSn\": \"string\",\n       \"duration\": 0,\n       \"id\": \"string\",\n       \"marketCenterId\": \"string\",\n       \"ownerId\": \"string\",\n       \"ownerType\": \"DEALER\",\n       \"productId\": \"string\",\n       \"productModel\": \"string\",\n       \"productName\": \"string\",\n       \"productPn\": \"string\",\n       \"reason\": \"string\",\n       \"status\": \"PENDING_CHECK\",\n       \"statusDate\": 0,\n       \"type\": \"ADD\",\n       \"unit\": \"string\"\n     }\n    },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-15T06:21:10.753Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20230003",
            "description": "<p>调整类型为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230004",
            "description": "<p>租约时长为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230006",
            "description": "<p>调整原因为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230005",
            "description": "<p>设备sn为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210003",
            "description": "<p>查询租赁设备失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20216013",
            "description": "<p>无法获取产品信息</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111005",
            "description": "<p>分页查询营销中心人员失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230007",
            "description": "<p>添加租约调整失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20219002",
            "description": "<p>获取订单租赁设备服务列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230011",
            "description": "<p>添加订单延申表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230010",
            "description": "<p>修改租约调整申请失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20219001",
            "description": "<p>新增订单租赁设备失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/addDealerAdjustLease",
    "title": "创建经销商租约调整单",
    "name": "addDealerAdjustLease",
    "group": "AdjustLeaseController",
    "description": "<p>创建经销商租约调整单</p>",
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
            "field": "duration",
            "description": "<p>租期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reason",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contacts",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telephone",
            "description": "<p>联系方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"deviceId\": \"string\",\n   \"duration\": 0,\n   \"reason\": \"string\",\n   \"deviceSn\": \"string\",\n   \"contacts\": \"string\",\n   \"telephone\": \"string\"\n}",
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
            "type": "object",
            "optional": false,
            "field": "data.leaseAdjustRequestDto",
            "description": "<p>租约调整申请对象</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.checkType",
            "description": "<p>审核类型   PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.createManType",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.duration",
            "description": "<p>调整时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.ownerId",
            "description": "<p>设备拥有者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.ownerType",
            "description": "<p>设备拥有者类型 DEALER(经销商) RENT(租赁平台)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.reason",
            "description": "<p>申请原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.statusDate",
            "description": "<p>状态变更时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.contacts",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseAdjustRequestDto.telephone",
            "description": "<p>联系方式</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"leaseAdjustRequestDto\": {\n       \"checkId\": \"string\",\n       \"checkType\": \"UNDER_REVIEW\",\n       \"createDate\": 0,\n       \"createMan\": \"string\",\n       \"createManType\": \"UNKOWN\",\n       \"deviceId\": \"string\",\n       \"deviceSn\": \"string\",\n       \"duration\": 0,\n       \"id\": \"string\",\n       \"marketCenterId\": \"string\",\n       \"ownerId\": \"string\",\n       \"ownerType\": \"DEALER\",\n       \"productId\": \"string\",\n       \"productModel\": \"string\",\n       \"productName\": \"string\",\n       \"productPn\": \"string\",\n       \"reason\": \"string\",\n       \"status\": \"PENDING_CHECK\",\n       \"statusDate\": 0,\n       \"type\": \"ADD\",\n       \"unit\": \"string\"\n     }\n    },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-15T06:21:10.753Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20230003",
            "description": "<p>调整类型为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230004",
            "description": "<p>租约时长为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230006",
            "description": "<p>调整原因为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230005",
            "description": "<p>设备sn为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210003",
            "description": "<p>查询租赁设备失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20216013",
            "description": "<p>无法获取产品信息</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111005",
            "description": "<p>分页查询营销中心人员失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230007",
            "description": "<p>添加租约调整失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20219002",
            "description": "<p>获取订单租赁设备服务列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230011",
            "description": "<p>添加订单延申表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230010",
            "description": "<p>修改租约调整申请失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20219001",
            "description": "<p>新增订单租赁设备失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/closeAdjustLeases/{id}",
    "title": "关闭租约调整申请",
    "name": "closeAdjustLeases",
    "group": "AdjustLeaseController",
    "description": "<p>关闭租约调整申请</p>",
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
            "field": "id",
            "description": "<p>租约调整标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"id\":\"11111\"\n}",
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
            "description": "<p>返回数据对象</p>"
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
            "field": "data.checkType",
            "description": "<p>审核类型 UNDER_REVIEW/审核中 AUDIT_PASS/审核通过 AUDIT_REJECT/审核拒绝</p>"
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
            "field": "data.createManType",
            "description": "<p>创建者标识</p>"
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
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.duration",
            "description": "<p>调整时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.ownerId",
            "description": "<p>设备拥有者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.ownerType",
            "description": "<p>设备拥有者类型 DEALER(经销商) RENT(租赁平台)</p>"
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
            "field": "data.productModel",
            "description": "<p>产品型号</p>"
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
            "field": "data.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reason",
            "description": "<p>申请原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.statusDate",
            "description": "<p>状态变更时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.type",
            "description": "<p>类型 ADD(增加) SUB(减少)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.updateMan",
            "description": "<p>更新者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.updateManType",
            "description": "<p>更新者标识</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"checkId\": \"string\",\n     \"checkType\": \"UNDER_REVIEW\",\n     \"createDate\": 0,\n     \"createMan\": \"string\",\n     \"createManType\": \"UNKOWN\",\n     \"deviceId\": \"string\",\n     \"deviceSn\": \"string\",\n     \"duration\": 0,\n     \"id\": \"string\",\n     \"marketCenterId\": \"string\",\n     \"ownerId\": \"string\",\n     \"ownerType\": \"DEALER\",\n     \"productId\": \"string\",\n     \"productModel\": \"string\",\n     \"productName\": \"string\",\n     \"productPn\": \"string\",\n     \"reason\": \"string\",\n     \"status\": \"PENDING_CHECK\",\n     \"statusDate\": 0,\n     \"type\": \"ADD\",\n     \"unit\": \"string\",\n     \"updateDate\": 0,\n     \"updateMan\": \"string\",\n     \"updateManType\": \"UNKOWN\"\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-15T06:58:04.891Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20230008",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230002",
            "description": "<p>查询租赁设备失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230009",
            "description": "<p>租约调整申请已完成或已关闭</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230010",
            "description": "<p>修改租约调整申请失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230012",
            "description": "<p>查询订单延申表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230013",
            "description": "<p>修改订单延申表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230014",
            "description": "<p>关闭审核流程失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/getAdjustLeaseInfo/{id}",
    "title": "查询租约调整信息",
    "name": "getAdjustLeaseInfo",
    "group": "AdjustLeaseController",
    "description": "<p>查询租约调整信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "description": "<p>返回数据对象</p>"
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
            "field": "data.checkType",
            "description": "<p>审核类型  UNDER_REVIEW/审核中 AUDIT_PASS/审核通过 AUDIT_REJECT/审核拒绝</p>"
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
            "field": "data.createManName",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceStatus",
            "description": "<p>设备状态  PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.duration",
            "description": "<p>调整时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productModel",
            "description": "<p>产品型号</p>"
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
            "field": "data.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reason",
            "description": "<p>调整原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>租约调整单状态   PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contacts",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.telephone",
            "description": "<p>联系方式</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"checkId\": \"string\",\n     \"checkType\": \"UNDER_REVIEW\",\n     \"createDate\": 0,\n     \"createManName\": \"string\",\n     \"deviceSn\": \"string\",\n     \"deviceStatus\": \"PENDING_RENT\",\n     \"duration\": 0,\n     \"id\": \"string\",\n     \"productModel\": \"string\",\n     \"productName\": \"string\",\n     \"productPn\": \"string\",\n     \"reason\": \"string\",\n     \"status\": \"PENDING_CHECK\",\n     \"unit\": \"string\"\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-15T03:11:29.647Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20230008",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230002",
            "description": "<p>查询租赁设备失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210003",
            "description": "<p>查询租赁设备失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/getDealerAdjustLeaseInfo/{id}",
    "title": "查询经销商租约详情",
    "name": "getDealerAdjustLeaseInfo",
    "group": "AdjustLeaseController",
    "description": "<p>查询经销商租约详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "description": "<p>返回数据对象</p>"
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
            "field": "data.checkType",
            "description": "<p>审核类型  UNDER_REVIEW/审核中 AUDIT_PASS/审核通过 AUDIT_REJECT/审核拒绝</p>"
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
            "field": "data.createManName",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceStatus",
            "description": "<p>设备状态  PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.duration",
            "description": "<p>调整时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productModel",
            "description": "<p>产品型号</p>"
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
            "field": "data.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reason",
            "description": "<p>调整原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>租约调整单状态   PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contacts",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.telephone",
            "description": "<p>联系方式</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"checkId\": \"string\",\n     \"checkType\": \"UNDER_REVIEW\",\n     \"createDate\": 0,\n     \"createManName\": \"string\",\n     \"deviceSn\": \"string\",\n     \"deviceStatus\": \"PENDING_RENT\",\n     \"duration\": 0,\n     \"id\": \"string\",\n     \"productModel\": \"string\",\n     \"productName\": \"string\",\n     \"productPn\": \"string\",\n     \"reason\": \"string\",\n     \"status\": \"PENDING_CHECK\",\n     \"unit\": \"string\"\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-15T03:11:29.647Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20230008",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20230002",
            "description": "<p>查询租赁设备失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210003",
            "description": "<p>查询租赁设备失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/listAdjustLeases",
    "title": "分页查询租约调整单",
    "name": "listAdjustLease",
    "group": "AdjustLeaseController",
    "description": "<p>分页查询租约调整单</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名 id(单号) deviceSn(设备SN)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期开始</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期结束</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"string\"\n     }\n   ],\n   \"query\": {\n     \"queryFieldName\": \"string\",\n     \"queryValue\": \"string\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0,\n     \"status\": \"PENDING_CHECK\"\n   }\n}",
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
            "description": "<p>返回数据对象</p>"
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
            "description": "<p>数据集合</p>"
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
            "field": "data.list.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.duration",
            "description": "<p>调整时长</p>"
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
            "type": "string",
            "optional": false,
            "field": "data.list.reason",
            "description": "<p>调整原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createName",
            "description": "<p>下单员</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.telephone",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"current_page\": 0,\n     \"list\": [\n       {\n        \"createDate\": 0,\n         \"deviceSn\": \"string\",\n         \"duration\": 0,\n         \"id\": \"string\",\n         \"reason\": \"string\",\n         \"status\": \"PENDING_CHECK\",\n         \"createName\":\"zhangsan\",\n         \"telephone\":\"1111\",\n         \"productName\":\"111\"\n       }\n     ],\n     \"per_page\": 0\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-15T07:41:27.829Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20230001",
            "description": "<p>分页查询租约调整申请失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/listAdjustLeasesAssociatedDevices/{id}",
    "title": "查询租约调整申请单关联的设备明细",
    "name": "listAdjustLeasesAssociatedDevices",
    "group": "AdjustLeaseController",
    "description": "<p>查询租约调整申请单关联的设备明细</p>",
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
            "field": "id",
            "description": "<p>租约调整标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"id\":\"11111\"\n}",
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
            "description": "<p>返回数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.activateDate",
            "description": "<p>激活时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceSN",
            "description": "<p>设备SN</p>"
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
            "type": "int",
            "optional": false,
            "field": "data.remainPeriod",
            "description": "<p>剩余租约</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.rentStatus",
            "description": "<p>设备租赁状态  PENDING_ACTIVATION(待激活) LEASING(租赁中) PAUSE(暂停中) FINISHED(已结束)</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n \"code\": \"string\",\n \"data\": [\n   {\n     \"activateDate\": 0,\n     \"deviceSN\": \"string\",\n     \"productId\": \"string\",\n     \"productName\": \"string\",\n     \"remainPeriod\": 0,\n     \"rentStatus\": \"PENDING_ACTIVATION\"\n   }\n ],\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-15T03:15:44.689Z\",\n \"status\": \"string\"\n}",
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
            "field": "20230008",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20219002",
            "description": "<p>获取订单租赁设备服务列表失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/adjustLeaseRest/listDealerAdjustLeases",
    "title": "分页查询经销商租约调整单",
    "name": "listDealerAdjustLeases",
    "group": "AdjustLeaseController",
    "description": "<p>分页查询经销商租约调整单</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
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
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名 id(单号) deviceSn(设备SN)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期开始</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期结束</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"string\"\n     }\n   ],\n   \"query\": {\n     \"queryFieldName\": \"string\",\n     \"queryValue\": \"string\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0,\n     \"status\": \"PENDING_CHECK\"\n   }\n}",
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
            "description": "<p>返回数据对象</p>"
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
            "description": "<p>数据集合</p>"
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
            "field": "data.list.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.duration",
            "description": "<p>调整时长</p>"
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
            "type": "string",
            "optional": false,
            "field": "data.list.reason",
            "description": "<p>调整原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createName",
            "description": "<p>下单员</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.telephone",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"current_page\": 0,\n     \"list\": [\n       {\n        \"createDate\": 0,\n         \"deviceSn\": \"string\",\n         \"duration\": 0,\n         \"id\": \"string\",\n         \"reason\": \"string\",\n         \"status\": \"PENDING_CHECK\",\n         \"createName\":\"zhangsan\",\n         \"telephone\":\"1111\",\n         \"productName\":\"111\"\n       }\n     ],\n     \"per_page\": 0\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-15T07:41:27.829Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20230001",
            "description": "<p>分页查询租约调整申请失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/AdjustLeaseController.java",
    "groupTitle": "AdjustLeaseController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/closeDirectRentOrder/{rentOrderId}",
    "title": "关闭直租订单",
    "name": "closeDirectRentOrder",
    "group": "DirectRentOrderRestController",
    "description": "<p>关闭直租订单</p>",
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
            "field": "rentOrderId",
            "description": "<p>直租订单标识</p>"
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
          "content": "{\n \"code\": \"string\",\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T06:48:09.422Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/createDirectRentOrder",
    "title": "创建直租订单",
    "name": "createDirectRentOrder",
    "group": "DirectRentOrderRestController",
    "description": "<p>创建直租订单</p>",
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
            "field": "adminPhone",
            "description": "<p>管理员手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rentPeriod",
            "description": "<p>租期</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "amount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addressDetail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "acceptRegion",
            "description": "<p>收货区域</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "products",
            "description": "<p>产品信息</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "products.amount",
            "description": "<p>产品总租金</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.unit",
            "description": "<p>产品单位</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "products.num",
            "description": "<p>产品数量</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "products.rentPrice",
            "description": "<p>产品租金</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "products.rentPeriodRangeDtos",
            "description": "<p>租期分布</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "products.rentPeriodRangeDtos.periodOrder",
            "description": "<p>租期序号</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "products.rentPeriodRangeDtos.rentMoney",
            "description": "<p>租金</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"adminPhone\": \"string\",\n  \"rentPeriod\": 0,\n  \"amount\": 0,\n  \"customId\": \"string\",\n  \"customName\": \"string\",\n  \"accountPeriodId\": \"string\",\n  \"consignee\": \"string\",\n  \"addressDetail\": \"string\",\n  \"acceptRegion\": \"string\",\n  \"contactNum\": \"string\",\n  \"marketCenterId\": \"string\",\n  \"comment\": \"string\",\n  \"products\": [\n    {\n      \"amount\": 0,\n      \"productId\": \"string\",\n      \"productModel\": \"string\",\n      \"productPn\": \"string\",\n      \"productName\": \"string\",\n      \"unit\": \"string\",\n      \"num\": 0,\n      \"rentPrice\": 0,\n      \"rentPeriodRangeDtos\": [\n        {\n          \"periodOrder\": 0,\n          \"rentMoney\": 0\n        }\n      ]\n    }\n  ]\n}",
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
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>订单号</p>"
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
          "content": "{\n  \"code\": \"string\",\n  \"data\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-14T01:38:39.638Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/exportDirectRentOrder",
    "title": "导出直租订单列表",
    "name": "exportDirectRentOrder",
    "group": "DirectRentOrderRestController",
    "description": "<p>导出直租订单列表</p>",
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
            "type": "array(object)",
            "optional": false,
            "field": "columns",
            "description": "<p>列表信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "columns.code",
            "description": "<p>列编码（英文）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "columns.name",
            "description": "<p>列名称（中文）</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "ids",
            "description": "<p>订单标识数组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/getDirectRentOrderDetail/{rentOrderId}",
    "title": "查询直租订单详情",
    "name": "getDirectRentOrderDetail",
    "group": "DirectRentOrderRestController",
    "description": "<p>查询直租订单详情</p>",
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
            "field": "rentOrderId",
            "description": "<p>直租订单标识</p>"
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
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customCode",
            "description": "<p>客户编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customLevel",
            "description": "<p>客户级别</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.drOrderProductVos",
            "description": "<p>跟订单关联的产品信息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.drOrderProductVos.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drOrderProductVos.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drOrderProductVos.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drOrderProductVos.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drOrderProductVos.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drOrderProductVos.rentMoney",
            "description": "<p>产品总租金</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.drOrderProductVos.rentRangeVos",
            "description": "<p>租期分布列表</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.drOrderProductVos.rentRangeVos.rentMoney",
            "description": "<p>租金，对应某一年的租金，不同的时间租金不一样</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.drOrderProductVos.rentRangeVos.rentPeriod",
            "description": "<p>租期，例如:第1年</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drOrderProductVos.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderId",
            "description": "<p>直租订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderStatus",
            "description": "<p>订单状态   待审核PENDING_CHECK/待出货PENDING_SHIP/已完成FINISHED/已关闭CLOSED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.rentOrderType",
            "description": "<p>直租订单类型   直租订单DIRECT_RENT/商用售租订单COMMERCIAL_SALE_RENT/民用售租订单CIVIL_SALE_RENT/续租订单RERENT</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterName",
            "description": "<p>营销中心名称</p>"
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
            "field": "data.adminPhone",
            "description": "<p>管理员手机号码</p>"
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
          "content": "{\n \"code\": \"string\",\n \"data\": {\n   \"acceptAddress\": \"string\",\n   \"activateDate\": 0,\n   \"amount\": 0,\n   \"checkId\": \"string\",\n   \"checkState\": 0,\n   \"comment\": \"string\",\n   \"consignee\": \"string\",\n   \"contactNum\": \"string\",\n   \"createDate\": 0,\n   \"createMan\": \"string\",\n   \"createManName\": \"string\",\n   \"customCode\": \"string\",\n   \"customId\": \"string\",\n   \"customLevel\": \"string\",\n   \"customName\": \"string\",\n   \"debugDate\": 0,\n   \"deliveryDate\": 0,\n   \"drOrderProductVos\": [\n     {\n       \"number\": 0,\n       \"productId\": \"string\",\n       \"productModel\": \"string\",\n       \"productName\": \"string\",\n       \"productPn\": \"string\",\n       \"rentMoney\": \"string\",\n       \"rentRangeVos\": [\n         {\n           \"rentMoney\": 0,\n           \"rentPeriod\": 0\n         }\n       ],\n       \"unit\": \"string\"\n     }\n   ],\n   \"orderId\": \"string\",\n   \"orderStatus\": \"PENDING_CHECK\",\n   \"rentOrderType\": \"DIRECT_RENT\",\n   \"saleCenterId\": \"string\",\n   \"saleCenterName\": \"string\"\n },\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T03:02:34.334Z\",\n \"status\": \"string\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/getOrderAccountInfoByOrderId/{rentOrderId}",
    "title": "根据直租订单标识获取直租订单账期相关信息",
    "name": "getOrderAccountInfoByOrderId",
    "group": "DirectRentOrderRestController",
    "description": "<p>根据直租订单标识获取直租订单账期相关信息</p>",
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
            "field": "rentOrderId",
            "description": ""
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
            "field": "data.id",
            "description": "<p>订单账期标识</p>"
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
            "type": "array(object)",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos",
            "description": "<p>订单账期详情列表</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.acceptMoney",
            "description": "<p>已回款</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.id",
            "description": "<p>订单账期详情标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.orderAccountId",
            "description": "<p>订单账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.payDate",
            "description": "<p>回款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.payMoney",
            "description": "<p>账期金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.payNode",
            "description": "<p>回款节点</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.payRadio",
            "description": "<p>回款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.periodOrder",
            "description": "<p>期数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.status",
            "description": "<p>订单账期明细状态   未开始NOT_START/已完成FINISHED/近期回款NEAR_BACK/已逾期EXPIRE</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.orderAccountPeriodDetailVos.statusDate",
            "description": "<p>状态更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.period",
            "description": "<p>账期期限</p>"
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
            "field": "data.remainedMoney",
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
            "description": "<p>订单账期状态  进行中RUNNING/已完成FINISHED/已关闭CLOSED/已逾期EXPIRED</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.statusDate",
            "description": "<p>状态更新时间</p>"
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
          "title": "Success-Response:",
          "content": "{\n \"code\": \"string\",\n \"data\": {\n   \"accountPeriodId\": \"string\",\n   \"amount\": 0,\n   \"endDate\": 0,\n   \"id\": \"string\",\n   \"name\": \"string\",\n   \"orderAccountPeriodDetailVos\": [\n     {\n       \"acceptMoney\": 0,\n       \"id\": \"string\",\n       \"orderAccountId\": \"string\",\n       \"payDate\": 0,\n       \"payMoney\": 0,\n       \"payNode\": 0,\n       \"payRadio\": 0,\n       \"periodOrder\": 0,\n       \"status\": \"NOT_START\",\n       \"statusDate\": 0\n     }\n   ],\n   \"orderId\": \"string\",\n   \"period\": 0,\n   \"receivedMoney\": 0,\n   \"remainedMoney\": 0,\n   \"startDate\": 0,\n   \"status\": \"RUNNING\",\n   \"statusDate\": 0\n },\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T03:58:01.496Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/listCheckStatus/{checkId}",
    "title": "获取直租订单审核状态明细列表",
    "name": "listCheckStatus",
    "group": "DirectRentOrderRestController",
    "description": "<p>获取直租订单审核状态明细列表</p>",
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
            "field": "checkId",
            "description": "<p>审核标识</p>"
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
            "field": "data.checkDate",
            "description": "<p>审核时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.checkState",
            "description": "<p>审核状态</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.operMan",
            "description": "<p>操作人标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.operManName",
            "description": "<p>操作人名称</p>"
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
          "content": "{\n \"code\": \"string\",\n \"data\": [\n   {\n     \"checkDate\": \"string\",\n     \"checkState\": 0,\n     \"operMan\": \"string\",\n     \"operManName\": \"string\"\n   }\n ],\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T03:33:50.172Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/listDirectRentOrder",
    "title": "分页查询直租订单列表",
    "name": "listDirectRentOrder",
    "group": "DirectRentOrderRestController",
    "description": "<p>分页查询直租订单列表</p>",
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
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
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
            "type": "string",
            "optional": false,
            "field": "query.orderStatus",
            "description": "<p>订单状态  待审核PENDING_CHECK/待出货PENDING_SHIP/已完成FINISHED/已关闭CLOSED</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.rentPeriod",
            "description": "<p>租期</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建时段起点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建时段结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.qryFieldName",
            "description": "<p>qryFieldName 查询字段名称 订单号id/产品名称productName/客户名称customName/下单员createManName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.qryFieldValue",
            "description": "<p>qryFieldValue 查询字段值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"page\": 1,\n \"size\": 10,\n \"query\": {\n   \"createDateEnd\": 0,\n   \"createDateStart\": 0,\n   \"orderStatus\": \"PENDING_CHECK\",\n   \"qryFieldName\": \"string\",\n   \"qryFieldValue\": \"string\",\n   \"rentPeriod\": 0\n },\n \"sort\": [\n   {\n     \"createDate\": \"desc\"\n   }\n ]\n}",
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
            "description": "<p>创建时间</p>"
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
            "description": "<p>下单员名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.drOrderProductListVos",
            "description": "<p>订单产品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.drOrderProductListVos.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.drOrderProductListVos.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.drOrderProductListVos.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.drOrderProductListVos.rentMoney",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.drOrderProductListVos.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.handleManName",
            "description": "<p>状态处理人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderStatus",
            "description": "<p>订单状态  待审核PENDING_CHECK/待出货PENDING_SHIP/已完成FINISHED/已关闭CLOSED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.statusHandleMan",
            "description": "<p>状态处理人标识</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.vaildPeriod",
            "description": "<p>租期</p>"
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
          "content": "{\n \"code\": \"string\",\n \"data\": {\n   \"count\": 0,\n   \"list\": [\n     {\n       \"amount\": 0,\n       \"createDate\": 0,\n       \"createMan\": \"string\",\n       \"createManName\": \"string\",\n       \"customId\": \"string\",\n       \"customName\": \"string\",\n       \"drOrderProductListVos\": [\n         {\n           \"number\": 0,\n           \"productId\": \"string\",\n           \"productName\": \"string\",\n           \"rentMoney\": \"string\",\n           \"unit\": \"string\"\n         }\n       ],\n       \"handleManName\": \"string\",\n       \"orderId\": \"string\",\n       \"orderStatus\": \"PENDING_CHECK\",\n       \"statusHandleMan\": \"string\",\n       \"vaildPeriod\": 0\n     }\n   ]\n },\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T02:29:05.593Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/listDirectRentOrderDeviceInfo",
    "title": "获取直租订单设备与租约信息列表",
    "name": "listDirectRentOrderDeviceInfo",
    "group": "DirectRentOrderRestController",
    "description": "<p>获取直租订单设备与租约信息列表</p>",
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
            "description": "<p>每页大小</p>"
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
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.rentStatus",
            "description": "<p>租约状态</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceSN",
            "description": "<p>设备SN</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"page\": 0,\n \"query\": {\n   \"deviceSN\": \"string\",\n   \"orderId\": \"string\",\n   \"productId\": \"string\",\n   \"productName\": \"string\",\n   \"rentStatus\": 0\n },\n \"size\": 0,\n \"sort\": [\n   {\n     \"activateTime\": \"desc\"\n   }\n ]\n}",
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
            "field": "data.list.activateTime",
            "description": "<p>激活时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSN",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.remainPeriod",
            "description": "<p>剩余租约</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.rentStatus",
            "description": "<p>租约状态        待激活PENDING_ACTIVATION/租赁中LEASING/暂停中PAUSE/已结束FINISHED</p>"
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
          "title": "Success-Response:",
          "content": "{\n \"code\": \"string\",\n \"data\": {\n   \"count\": 0,\n   \"list\": [\n     {\n       \"activateTime\": 0,\n       \"deviceId\": \"string\",\n       \"deviceSN\": \"string\",\n       \"productId\": \"string\",\n       \"productName\": \"string\",\n       \"remainPeriod\": 0,\n       \"rentStatus\": 0\n     }\n   ]\n },\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T04:05:31.006Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/listExtendOrderInfo",
    "title": "获取延伸订单信息列表",
    "name": "listExtendOrderInfo",
    "group": "DirectRentOrderRestController",
    "description": "<p>获取延伸订单信息列表</p>",
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
            "description": "<p>每页大小</p>"
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
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.handleStatus",
            "description": "<p>处理状态</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期起点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期终点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceSN",
            "description": "<p>设备SN</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"page\": 0,\n \"query\": {\n   \"createDateEnd\": 0,\n   \"createDateStart\": 0,\n   \"deviceSN\": \"string\",\n   \"handleStatus\": 0,\n   \"orderId\": \"string\",\n   \"orderType\": 0,\n   \"productId\": \"string\"\n },\n \"size\": 0,\n \"sort\": [\n   {\n     \"createDate\": \"desc\"\n   }\n ]\n}",
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
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSN",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.extendOrderId",
            "description": "<p>延伸订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.orderType",
            "description": "<p>订单类型       直租订单DIRECT_RENT/商用售租订单COMMERCIAL_SALE_RENT/民用售租订单CIVIL_SALE_RENT /续租订单RERENT/换机订单LEASE_ADJUST/换机工单CHANGE_WORK_ORDER/退租申请单THROW_LEASE/租约服务订单LEASE_SERVICE</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态      待审核PENDING_CHECK/待出货WAITING_SHIPMENT/已完成FINISHED/已关闭CLOSED</p>"
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
          "title": "Success-Response:",
          "content": "{\n \"code\": \"string\",\n \"data\": {\n   \"count\": 0,\n   \"list\": [\n     {\n       \"createDate\": 0,\n       \"deviceId\": \"string\",\n       \"deviceSN\": \"string\",\n       \"extendOrderId\": \"string\",\n       \"orderType\": 0,\n       \"productId\": \"string\",\n       \"productName\": \"string\",\n       \"status\": 0\n     }\n   ]\n },\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T06:32:07.324Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/listOrderStatusDetails/{rentOrderId}",
    "title": "获取直租订单状态明细列表",
    "name": "listOrderStatusDetails",
    "group": "DirectRentOrderRestController",
    "description": "<p>获取直租订单状态明细列表</p>",
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
            "field": "rentOrderId",
            "description": "<p>直租订单标识</p>"
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
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.finished",
            "description": "<p>操作类型是否已终止</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.operStatus",
            "description": "<p>操作状态   订单创建ORDER_CREATE/待审核PENDING_CHECK(1)/审核完成CHECKED(2)/待出货(未出货)PENDING_SHIP/ 待出货(出货中)SHIPPING/订单关闭(手动关闭)ORDER_CLOSE/订单关闭(审核拒绝)CHECK_REFUSE/出货完成SHIPPED/待出货WAIT_SHIP</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.operType",
            "description": "<p>操作类型   创建CREATE/审核CHECK/出货SHIP</p>"
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
          "content": "{\n \"code\": \"string\",\n \"data\": [\n   {\n     \"createDate\": 0,\n     \"createMan\": \"string\",\n     \"createManName\": \"string\",\n     \"finished\": true,\n     \"operStatus\": \"ORDER_CREATE\",\n     \"operType\": \"CREATE\"\n   }\n ],\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T03:24:33.340Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/listThrowChangeRecord",
    "title": "获取直租订单退换记录列表",
    "name": "listThrowChangeRecord",
    "group": "DirectRentOrderRestController",
    "description": "<p>获取直租订单退换记录列表</p>",
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
            "description": "<p>每页大小</p>"
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
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.billType",
            "description": "<p>单据类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.handleStatus",
            "description": "<p>处理状态</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期起点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期终点</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"page\": 0,\n \"query\": {\n   \"billType\": 0,\n   \"createDateEnd\": 0,\n   \"createDateStart\": 0,\n   \"handleStatus\": 0,\n   \"orderId\": \"string\",\n   \"productId\": \"string\",\n   \"productName\": \"string\"\n },\n \"size\": 0,\n \"sort\": [\n   {\n     \"createDate\": \"desc\"\n   }\n ]\n}",
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
            "type": "string",
            "optional": false,
            "field": "data.list.billId",
            "description": "<p>单据标识</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.billType",
            "description": "<p>单据类型     直租订单DIRECT_RENT/商用售租订单COMMERCIAL_SALE_RENT /民用售租订单CIVIL_SALE_RENT/续租订单RERENT/换机订单CHANGE/租约调整订单LEASE_ADJUST /换机工单CHANGE_WORK_ORDER/退租申请单THROW_LEASE/租约服务订单LEASE_SERVICE</p>"
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
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSN",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.handleStatus",
            "description": "<p>处理状态</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
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
          "content": "{\n \"code\": \"string\",\n \"data\": {\n   \"count\": 0,\n   \"list\": [\n     {\n       \"billId\": \"string\",\n       \"billType\": 0,\n       \"createDate\": 0,\n       \"deviceId\": \"string\",\n       \"deviceSN\": \"string\",\n       \"handleStatus\": 0,\n       \"productId\": \"string\",\n       \"productName\": \"string\"\n     }\n   ]\n },\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T06:25:42.305Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/directRentOrderRest/updateDirectRentOrderInfo",
    "title": "修改管理员手机号码",
    "name": "updateDirectRentOrderInfo",
    "group": "DirectRentOrderRestController",
    "description": "<p>修改管理员手机号码</p>",
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
            "field": "id",
            "description": "<p>直租订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminPhone",
            "description": "<p>管理员手机号码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"adminPhone\": \"string\",\n \"id\": \"string\"\n}",
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
            "type": "string",
            "optional": false,
            "field": "data.adminPhone",
            "description": "<p>管理员手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>物流单号标识</p>"
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
          "title": "Success-Response:",
          "content": "{\n \"code\": \"string\",\n \"data\": {\n   \"adminPhone\": \"string\",\n   \"id\": \"string\"\n },\n \"msg\": \"string\",\n \"responseTime\": \"2019-03-14T07:33:57.108Z\",\n \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/DirectRentOrderRestController.java",
    "groupTitle": "DirectRentOrderRestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseServiceRest/addLeaseServiceOrder",
    "title": "创建租约服务订单",
    "name": "addLeaseServiceOrder",
    "group": "LeaseServiceRestController",
    "description": "<p>创建租约服务订单</p>",
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
            "field": "deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rentPeriod",
            "description": "<p>租期</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "saleRentSerivcePacks",
            "description": "<p>服务包</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "saleRentSerivcePacks.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "saleRentSerivcePacks.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.packId",
            "description": "<p>服务包标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.packName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "saleRentSerivcePacks.packOrder",
            "description": "<p>服务包序号 从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "saleRentSerivcePacks.packPeriod",
            "description": "<p>服务包期限</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.packPn",
            "description": "<p>服务包料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "saleRentSerivcePacks.unitPrice",
            "description": "<p>单价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"deviceId\": \"string\",\n  \"deviceSn\": \"string\",\n  \"rentPeriod\": 0,\n  \"saleRentSerivcePacks\": [\n    {\n      \"amount\": 0,\n      \"number\": 0,\n      \"packId\": \"string\",\n      \"packName\": \"string\",\n      \"packOrder\": 0,\n      \"packPeriod\": 0,\n      \"packPn\": \"string\",\n      \"unit\": \"TAI\",\n      \"unitPrice\": 0\n    }\n  ]\n}",
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
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据 租约服务订单标识</p>"
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
          "content": "{\n  \"code\": \"string\",\n  \"data\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-02-13T08:29:18.345Z\",\n  \"status\": \"string\"\n}",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseServiceRest/batAddLeaseServiceOrder",
    "title": "批量导入租约服务单",
    "name": "batAddLeaseServiceOrder",
    "group": "LeaseServiceRestController",
    "description": "<p>批量导入租约服务单</p>",
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
            "type": "file",
            "optional": false,
            "field": "filename",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array(string)",
            "optional": false,
            "field": "failInfo",
            "description": "<p>失败信息</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否全部成功</p>"
          },
          {
            "group": "Success 200",
            "type": "array(string)",
            "optional": false,
            "field": "successInfo",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"failInfo\": [\n    \"string\"\n  ],\n  \"success\": true,\n  \"successInfo\": [\n    \"string\"\n  ]\n}",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/leaseServiceRest/getLeaseServiceInfo/{id}",
    "title": "获取租约服务单信息",
    "name": "getLeaseServiceInfo",
    "group": "LeaseServiceRestController",
    "description": "<p>获取租约服务单信息</p>",
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
            "field": "id",
            "description": "<p>租约服务单号</p>"
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
            "field": "data.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>单号</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.leaseServicePacks",
            "description": "<p>租约服务包信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.leaseServicePacks.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.leaseServicePacks.cancelDate",
            "description": "<p>取消日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseServicePacks.cancelMan",
            "description": "<p>取消人标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseServicePacks.cancelManName",
            "description": "<p>取消人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseServicePacks.packId",
            "description": "<p>服务包标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseServicePacks.packName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.leaseServicePacks.packOrder",
            "description": "<p>服务包序号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.leaseServicePacks.packPeriod",
            "description": "<p>服务包期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseServicePacks.packSn",
            "description": "<p>服务包料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseServicePacks.packStatus",
            "description": "<p>服务包状态 已购买PURCHASED/预购PREORDER/已取消CANCEL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.leaseServicePacks.orderPackId",
            "description": "<p>订单服务包标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.leaseServicePacks.purchaseDate",
            "description": "<p>购买时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderType",
            "description": "<p>单据类型 商用COMMERCIAL/民用CIVIL/租约服务LEASE_SERVICE</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.rentPeriod",
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
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"createDate\": 0,\n    \"createMan\": \"string\",\n    \"createManName\": \"string\",\n    \"deviceSn\": \"string\",\n    \"id\": \"string\",\n    \"leaseServicePacks\": [\n      {\n        \"amount\": 0,\n        \"cancelDate\": 0,\n        \"cancelMan\": \"string\",\n        \"cancelManName\": \"string\",\n        \"packId\": \"string\",\n        \"packName\": \"string\",\n        \"packOrder\": 0,\n        \"packPeriod\": 0,\n        \"packSn\": \"string\",\n        \"packStatus\": \"PURCHASED\",\n        \"purchaseDate\": 0\n      }\n    ],\n    \"orderType\": \"COMMERCIAL\",\n    \"rentPeriod\": 0\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-25T12:22:25.205Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20216002",
            "description": "<p>租约服务单号为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20216003",
            "description": "<p>获取租约服务订单信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20216004",
            "description": "<p>租约服务信息不存在</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20216005",
            "description": "<p>获取服务包列表失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/leaseServiceRest/getServicePackNum/{deviceSn}",
    "title": "获取设备sn已购买或已预购的服务包数量",
    "name": "getServicePackNum",
    "group": "LeaseServiceRestController",
    "description": "<p>获取设备sn已购买或已预购的服务包数量</p>",
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
            "field": "deviceSn",
            "description": "<p>设备sn</p>"
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
            "type": "int",
            "optional": false,
            "field": "data",
            "description": "<p>服务包数量</p>"
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
          "content": "{\n  \"code\": \"string\",\n  \"data\": 0,\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-03T07:21:53.171Z\",\n  \"status\": \"string\"\n}",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseThrowRequestRest/createLeaseThrowRequest",
    "title": "创建退租订单",
    "name": "createLeaseThrowRequest",
    "group": "LeaseThrowRequestController",
    "description": "<p>创建退租订单</p>",
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
            "field": "reason",
            "description": "<p>退租原因</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceSn",
            "description": "<p>设备SN</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"reason\": \"string\",\n   \"deviceId\": \"string\",\n   \"deviceSn\": \"string\"\n}",
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
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": \"string\",\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-25T06:21:14.764Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseThrowRequestController.java",
    "groupTitle": "LeaseThrowRequestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseThrowRequestRest/createLeaseThrowRequestDealer",
    "title": "创建经销商设备退租申请",
    "name": "createLeaseThrowRequestDealer",
    "group": "LeaseThrowRequestController",
    "description": "<p>创建设备退租订单</p>",
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
            "field": "reason",
            "description": "<p>退租原因</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceSn",
            "description": "<p>设备SN</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"reason\": \"string\",\n   \"deviceId\": \"string\",\n   \"deviceSn\": \"string\"\n}",
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
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": \"string\",\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-25T06:21:14.764Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseThrowRequestController.java",
    "groupTitle": "LeaseThrowRequestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/leaseThrowRequestRest/getLeaseThrowRequestInfo/{id}",
    "title": "查询退租订单",
    "name": "getLeaseThrowRequestInfo",
    "group": "LeaseThrowRequestController",
    "description": "<p>查询退租订单</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "description": "<p>返回数据对象</p>"
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
            "field": "data.checkType",
            "description": "<p>审核类型</p>"
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
            "field": "data.createManName",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.currOrderId",
            "description": "<p>所属订单</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customName",
            "description": "<p>客户名称</p>"
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
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productModel",
            "description": "<p>产品模型</p>"
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
            "field": "data.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reason",
            "description": "<p>退租原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"checkId\": \"string\",\n     \"checkType\": \"UNDER_REVIEW\",\n     \"createDate\": 0,\n     \"createManName\": \"string\",\n     \"currOrderId\": \"string\",\n     \"customName\": \"string\",\n     \"deviceId\": \"string\",\n     \"deviceSn\": \"string\",\n     \"id\": \"string\",\n     \"productModel\": \"string\",\n     \"productName\": \"string\",\n     \"productPn\": \"string\",\n     \"reason\": \"string\",\n     \"status\": \"PENDING_CHECK\"\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-25T06:35:47.951Z\",\n   \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseThrowRequestController.java",
    "groupTitle": "LeaseThrowRequestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseThrowRequestRest/getLeaseThrowRequestClose/{id}",
    "title": "关闭退租订单信息",
    "name": "leaseThrowRequestClose",
    "group": "LeaseThrowRequestController",
    "description": "<p>关闭退租订单信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"id\":\"11111\n}",
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
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": \"string\",\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-25T06:44:23.832Z\",\n   \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseThrowRequestController.java",
    "groupTitle": "LeaseThrowRequestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseThrowRequestRest/listLeaseThrowRequest",
    "title": "分页查询退租订单",
    "name": "listLeaseThrowRequest",
    "group": "LeaseThrowRequestController",
    "description": "<p>分页查询退租订单</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询参数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名  id/单号 deviceSn/设备SN</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"string\",\n     }\n   ],\n   \"query\": {\n     \"queryFieldName\": \"string\",\n     \"queryValue\": \"string\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0,\n     \"status\": \"PENDING_CHECK\"\n   }\n}",
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
            "description": "<p>返回数据对象</p>"
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
            "description": "<p>返回数据集合</p>"
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
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备SN</p>"
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
            "type": "string",
            "optional": false,
            "field": "data.list.reason",
            "description": "<p>退租原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态 PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"createDate\": 0,\n         \"deviceId\": \"string\",\n         \"deviceSn\": \"string\",\n         \"id\": \"string\",\n         \"reason\": \"string\",\n         \"status\": \"PENDING_CHECK\"\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-25T06:27:26.942Z\",\n   \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseThrowRequestController.java",
    "groupTitle": "LeaseThrowRequestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseThrowRequestRest/listLeaseThrowRequestDevice",
    "title": "分页查询未退租设备",
    "name": "listLeaseThrowRequestDevice",
    "group": "LeaseThrowRequestController",
    "description": "<p>分页查询未退租设备</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.num",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.model",
            "description": "<p>产品模型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态  LEASING/租赁中</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp3\": \"string\"\n     }\n   ]\n   \"query\": {\n     \"deviceSn\": \"string\",\n     \"productName\": \"string\",\n     \"num\": \"string\",\n     \"model\": \"string\",\n     \"status\": \"PENDING_RENT\"\n}",
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
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.model",
            "description": "<p>产品模型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.num",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"deviceSn\": \"string\",\n         \"model\": \"string\",\n         \"num\": \"string\",\n         \"productName\": \"string\",\n         \"status\": \"PENDING_RENT\"\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-05-09T09:36:57.260Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseThrowRequestController.java",
    "groupTitle": "LeaseThrowRequestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/leaseThrowRequestRest/listLeaseThrowRequestDeviceDealer",
    "title": "分页查询经销商未退租设备",
    "name": "listLeaseThrowRequestDeviceDealer",
    "group": "LeaseThrowRequestController",
    "description": "<p>分页查询经销商未退租设备</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.num",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.model",
            "description": "<p>产品模型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态  LEASING/租赁中</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp3\": \"string\"\n     }\n   ]\n   \"query\": {\n     \"deviceSn\": \"string\",\n     \"productName\": \"string\",\n     \"num\": \"string\",\n     \"model\": \"string\",\n     \"status\": \"PENDING_RENT\"\n}",
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
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.model",
            "description": "<p>产品模型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.num",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"deviceSn\": \"string\",\n         \"model\": \"string\",\n         \"num\": \"string\",\n         \"productName\": \"string\",\n         \"status\": \"PENDING_RENT\"\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-05-09T09:36:57.260Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/LeaseThrowRequestController.java",
    "groupTitle": "LeaseThrowRequestController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/reletOrderRest/createReletOrder",
    "title": "创建续租订单",
    "name": "createReletOrder",
    "group": "ReletOrderController",
    "description": "<p>创建续租订单</p>",
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
            "field": "originOrderId",
            "description": "<p>原订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rentPeriod",
            "description": "<p>续租租期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodId",
            "description": "<p>账期方式标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "amount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "products",
            "description": "<p>产品集合</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.rentOrderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.rentOrderType",
            "description": "<p>租赁订单类型 RERENT/续租订单</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "products.amount",
            "description": "<p>租金总额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.unit",
            "description": "<p>计量单位类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "products.num",
            "description": "<p>租赁数量</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "products.rentPrice",
            "description": "<p>租金</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "products.rentPeriodRangeDtos",
            "description": "<p>产品下租期集合</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "products.rentPeriodRangeDtos.rentOrderProductId",
            "description": "<p>租赁订单详情标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "products.rentPeriodRangeDtos.periodOrder",
            "description": "<p>租期序号</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "products.rentPeriodRangeDtos.rentMoney",
            "description": "<p>租金</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"originOrderId\": \"string\",\n   \"rentPeriod\": 0,\n   \"customId\": \"string\",\n   \"customName\": \"string\",\n   \"accountPeriodId\": \"string\",\n   \"comment\": \"string\",\n   \"amount\": 0,\n   \"products\": [\n     {\n       \"rentOrderId\": \"string\",\n       \"rentOrderType\": \"DIRECT_RENT\",\n       \"amount\": 0,\n       \"productId\": \"string\",\n       \"productModel\": \"string\",\n       \"productPn\": \"string\",\n       \"productName\": \"string\",\n       \"unit\": \"string\",\n       \"num\": 0,\n       \"rentPrice\": 0,\n       \"rentPeriodRangeDtos\": [\n         {\n           \"rentOrderProductId\": \"string\",\n           \"periodOrder\": 0,\n           \"rentMoney\": 0\n         }\n       ]\n     }\n   ]\n }",
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
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": \"string\",\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-29T07:52:05.837Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/reletOrderRest/findOrderRentDeviceProducts/{orderId}",
    "title": "查询订单所关联设备租赁中的产品信息",
    "name": "findOrderRentDeviceProducts",
    "group": "ReletOrderController",
    "description": "<p>这里填写接口描述</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "type": "int",
            "optional": false,
            "field": "data.num",
            "description": "<p>租赁数量</p>"
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
            "field": "data.productModel",
            "description": "<p>产品型号</p>"
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
            "field": "data.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.rentPeriodRangeDtos",
            "description": "<p>租期信息集合</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.rentPeriodRangeDtos.periodOrder",
            "description": "<p>租期序号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.rentPeriodRangeDtos.rentMoney",
            "description": "<p>每期租金</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.rentPrice",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.unit",
            "description": "<p>单位</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": [\n     {\n       \"num\": 0,\n       \"productId\": \"string\",\n       \"productModel\": \"string\",\n       \"productName\": \"string\",\n       \"productPn\": \"string\",\n       \"rentPeriodRangeDtos\": [\n         {\n           \"periodOrder\": 0,\n           \"rentMoney\": 0\n         }\n       ],\n       \"rentPrice\": 0,\n       \"unit\": \"string\"\n     }\n   ],\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-05-08T02:50:31.240Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/reletOrderRest/getReletOrderInfo/{id}",
    "title": "查询续租订单详情",
    "name": "getReletOrderInfo",
    "group": "ReletOrderController",
    "description": "<p>查询续租订单详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "field": "data.checkType",
            "description": "<p>审核类型  UNDER_REVIEW/审核中 AUDIT_PASS/审核通过 AUDIT_REJECT/审核拒绝</p>"
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
            "field": "data.createManName",
            "description": "<p>创建者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customCode",
            "description": "<p>客户编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterName",
            "description": "<p>营销中心名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.originOrderId",
            "description": "<p>原订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.reletOrderProductVos",
            "description": "<p>续租订单关联产品</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.reletOrderProductVos.amount",
            "description": "<p>产品总租金</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.reletOrderProductVos.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reletOrderProductVos.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reletOrderProductVos.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reletOrderProductVos.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reletOrderProductVos.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.reletOrderProductVos.rentMoney",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.reletOrderProductVos.rentPeriod",
            "description": "<p>续租租期</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.reletOrderProductVos.rentRangeVos",
            "description": "<p>租期分布</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.reletOrderProductVos.rentRangeVos.rentMoney",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.reletOrderProductVos.rentRangeVos.rentPeriod",
            "description": "<p>租期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reletOrderProductVos.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"amount\": 0,\n     \"checkId\": \"string\",\n     \"checkType\": \"UNDER_REVIEW\",\n     \"comment\": \"string\",\n     \"createManName\": \"string\",\n     \"customCode\": \"string\",\n     \"customName\": \"string\",\n     \"marketCenterName\": \"string\",\n     \"orderId\": \"string\",\n     \"originOrderId\": \"string\",\n     \"reletOrderProductVos\": [\n       {\n         \"amount\": 0,\n         \"number\": 0,\n         \"productId\": \"string\",\n         \"productModel\": \"string\",\n         \"productName\": \"string\",\n         \"productPn\": \"string\",\n         \"rentMoney\": 0,\n         \"rentPeriod\": 0,\n         \"rentRangeVos\": [\n           {\n             \"rentMoney\": 0,\n             \"rentPeriod\": 0\n           }\n         ],\n         \"unit\": \"string\"\n       }\n     ],\n     \"status\": \"PENDING_CHECK\"\n   }\n\"msg\": \"string\",\n\"responseTime\": \"2019-04-29T08:25:34.351Z\",\n\"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/reletOrderRest/listOrderExtend",
    "title": "获取延伸订单信息列表",
    "name": "listOrderExtend",
    "group": "ReletOrderController",
    "description": "<p>获取延伸订单信息列表</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>订单类型 THROW_LEASE/退租申请单 DIRECT_RENT/直租订单 RERENT/续租订单</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态   PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceSN",
            "description": "<p>设备SN</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"string\"\n     }\n   ]\n   \"query\": {\n     \"orderId\": \"string\",\n     \"orderType\": \"DIRECT_RENT\",\n     \"productId\": \"string\",\n     \"status\": \"PENDING_CHECK\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0,\n     \"deviceSN\": \"string\"\n   }\n }",
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
            "description": "<p>返回数据集合</p>"
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
            "description": "<p>数据集合</p>"
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
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSN",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0\n     \"list\": [\n       {\n         \"createDate\": 0,\n         \"deviceId\": \"string\",\n         \"deviceSN\": \"string\",\n         \"orderId\": \"string\",\n         \"orderType\": \"DIRECT_RENT\",\n         \"productId\": \"string\",\n         \"productName\": \"string\",\n         \"status\": \"PENDING_CHECK\"\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-05-13T10:25:53.597Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/reletOrderRest/listOrderRentDevices",
    "title": "分页查询订单租赁设备表",
    "name": "listOrderRentDevices",
    "group": "ReletOrderController",
    "description": "<p>分页查询订单租赁设备表</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.expireStartTime",
            "description": "<p>到期开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.expireEndTime",
            "description": "<p>到期结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 0,\n   \"size\": 0,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"string\"\n     }\n   ]\n   \"query\": {\n     \"orderId\": \"string\",\n     \"customName\": \"string\",\n     \"expireStartTime\": 0,\n     \"expireEndTime\": 0\n   }\n}",
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
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.expireTime",
            "description": "<p>到期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderType",
            "description": "<p>订单类型 DIRECT_RENT/直租订单 RERENT/续租订单</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"customName\": \"string\",\n         \"expireTime\": 0,\n         \"orderId\": \"string\",\n         \"orderType\": \"DIRECT_RENT\"\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-05-06T03:02:04.882Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/reletOrderRest/listOrderThrowChangeRecord",
    "title": "分页获取续租订单退换记录列表",
    "name": "listOrderThrowChangeRecord",
    "group": "ReletOrderController",
    "description": "<p>分页获取续租订单退换记录列表</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.originOrderId",
            "description": "<p>原订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>单据类型 THROW_LEASE/退租申请单 DIRECT_RENT/直租订单 RERENT/续租订单</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建结束日期</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"string\"\n     }\n   ]\n   \"query\": {\n     \"originOrderId\": \"string\",\n     \"orderType\": \"DIRECT_RENT\",\n     \"productName\": \"string\",\n     \"status\": \"IN_PROCESSING\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0\n   }\n }",
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
            "description": "<p>数据集合</p>"
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
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSN",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderType",
            "description": "<p>订单类型 THROW_LEASE/退租申请单 DIRECT_RENT/直租订单 RERENT/续租订单</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"createDate\": 0,\n         \"deviceId\": \"string\",\n         \"deviceSN\": \"string\",\n         \"orderId\": \"string\",\n         \"orderType\": \"DIRECT_RENT\",\n         \"productId\": \"string\",\n         \"productName\": \"string\",\n         \"status\": \"IN_PROCESSING\"\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-05-13T10:22:16.008Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/reletOrderRest/listReletOrders",
    "title": "分页查询续租订单列表",
    "name": "listReletOrders",
    "group": "ReletOrderController",
    "description": "<p>分页查询续租订单列表</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询参数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.rentPeriod",
            "description": "<p>续租租期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.id",
            "description": "<p>续租订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.originOrderId",
            "description": "<p>原订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.createManName",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态  PENDING_CHECK/待审核 FINISHED/已完成 CLOSED/已关闭</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"string\",\n     }\n   ],\n   \"query\": {\n     \"rentPeriod\": 0,\n     \"id\": \"string\",\n     \"originOrderId\": \"string\",\n     \"productName\": \"string\",\n     \"customName\": \"string\",\n     \"createManName\": \"string\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0,\n     \"status\": \"PENDING_CHECK\"\n   }\n}",
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
            "description": "<p>数据对象</p>"
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
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.amount",
            "description": ""
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
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customType",
            "description": "<p>客户类型 BIG_CUSTOM/大客户 DEALER/经销商</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderStatus",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orignOrderId",
            "description": "<p>源订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.reletOrderProductVos",
            "description": "<p>产品信息集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.reletOrderProductVos.amount",
            "description": "<p>产品总租金</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.reletOrderProductVos.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.reletOrderProductVos.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.reletOrderProductVos.productModel",
            "description": "<p>产品模型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.reletOrderProductVos.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.reletOrderProductVos.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.reletOrderProductVos.rentMoney",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.reletOrderProductVos.rentPeriod",
            "description": "<p>续租租期</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.reletOrderProductVos.rentRangeVos",
            "description": "<p>租期分布集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.reletOrderProductVos.rentRangeVos.rentMoney",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.reletOrderProductVos.rentRangeVos.rentPeriod",
            "description": "<p>租期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.reletOrderProductVos.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.rentPeriod",
            "description": "<p>租期</p>"
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
          "content": "{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"amount\": 0,\n         \"createDate\": 0,\n         \"createMan\": \"string\",\n         \"createManName\": \"string\",\n         \"customId\": \"string\",\n         \"customName\": \"string\",\n         \"customType\": \"BIG_CUSTOM\",\n         \"orderId\": \"string\",\n         \"orderStatus\": \"PENDING_CHECK\",\n         \"orignOrderId\": \"string\",\n         \"reletOrderProductVos\": [\n           {\n             \"amount\": 0,\n             \"number\": 0,\n             \"productId\": \"string\",\n             \"productModel\": \"string\",\n             \"productName\": \"string\",\n             \"productPn\": \"string\",\n             \"rentMoney\": 0,\n             \"rentPeriod\": 0,\n             \"rentRangeVos\": [\n               {\n                 \"rentMoney\": 0,\n                 \"rentPeriod\": 0\n               }\n             ],\n             \"unit\": \"string\"\n           }\n         ],\n         \"rentPeriod\": 0\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-29T08:02:04.121Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/reletOrderRest/reletOrderClose/{id}",
    "title": "关闭续租订单",
    "name": "reletOrderClose",
    "group": "ReletOrderController",
    "description": "<p>关闭续租订单</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "field": "data",
            "description": "<p>返回数据</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": \"string\",\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-29T09:20:46.266Z\",\n   \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/ReletOrderController.java",
    "groupTitle": "ReletOrderController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/exportManufacturerRentDevics",
    "title": "导出厂商设备生命周期列表",
    "name": "exportRentDevics",
    "group": "RentDeviceController",
    "description": "<p>导出厂商设备生命周期列表</p>",
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
            "type": "array(object)",
            "optional": true,
            "field": "columns",
            "description": "<p>列信息数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.code",
            "description": "<p>列编码（英文）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.name",
            "description": "<p>列名称（中文）</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "ids",
            "description": "<p>设备标识数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"ids\": [\n     \"string\"\n   ]\n}",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210016",
            "description": "<p>查询经销商信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210004",
            "description": "<p>查询产品失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/exportRentDevics",
    "title": "导出设备生命周期列表",
    "name": "exportRentDevics",
    "group": "RentDeviceController",
    "description": "<p>导出设备生命周期列表</p>",
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
            "type": "array(object)",
            "optional": true,
            "field": "columns",
            "description": "<p>列信息数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.code",
            "description": "<p>列编码（英文）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.name",
            "description": "<p>列名称（中文）</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "ids",
            "description": "<p>设备标识数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"ids\": [\n     \"string\"\n   ]\n}",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210016",
            "description": "<p>查询经销商信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210004",
            "description": "<p>查询产品失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/findDeviceLifeCycleInfoById/{id}",
    "title": "查询设备生命周期详情",
    "name": "findDeviceLifeCycleInfoById",
    "group": "RentDeviceController",
    "description": "<p>查询设备生命周期详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "description": "<p>返回数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.activateDate",
            "description": "<p>开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.activateDateEnd",
            "description": "<p>结束日期</p>"
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
            "field": "data.currOrderId",
            "description": "<p>当前所属订单</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.currOrderType",
            "description": "<p>订单类型  DIRECT_RENT(直租订单) COMMERCIAL_SALE_RENT(商用售租订单) CIVIL_SALE_RENT(民用售租订单) RERENT(续租订单) CHANGE(换机订单) LEASE_ADJUST(租约调整订单) CHANGE_WORK_ORDER(换机工单) THROW_LEASE(退租申请单) LEASE_SERVICE(租约服务订单)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.desc",
            "description": "<p>规格</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.firstActivateTime",
            "description": "<p>首次激活时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.model",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.num",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.packRemainPeriod",
            "description": "<p>服务包剩余时长</p>"
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
            "type": "int",
            "optional": false,
            "field": "data.remainPeriod",
            "description": "<p>剩余租期</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.rentDuration",
            "description": "<p>累计租赁时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>设备状态   PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.statusDate",
            "description": "<p>状态变更时间</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-28T02:30:10.287+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"deviceSn\": \"89001\",\n     \"productName\": \"小强牌净水器2\",\n     \"num\": \"555555\",\n     \"model\": \"tl123456\",\n     \"desc\": \"123*123*229\",\n     \"batNum\": \"ZZ0001\",\n     \"rentDuration\": 10,\n     \"packRemainPeriod\": 20,\n     \"firstActivateTime\": 1000877875,\n     \"status\": \"PENDING_RENT\",\n     \"remainPeriod\": 100,\n     \"activateDate\": 1009922112,\n     \"activateDateEnd\": 1811471410265,\n     \"currOrderId\": \"1\",\n     \"currOrderType\": \"DIRECT_RENT\",\n     \"statusDate\": 1548407359873\n   }\n}",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210003",
            "description": "<p>查询租赁设备失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210004",
            "description": "<p>查询产品失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210005",
            "description": "<p>查询设备租赁失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/findManufacturerDeviceInfoById/{id}",
    "title": "查询厂商设备生命周期详情",
    "name": "findManufacturerDeviceInfoById",
    "group": "RentDeviceController",
    "description": "<p>查询厂商设备生命周期详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "description": "<p>返回数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.activateDate",
            "description": "<p>开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.activateDateEnd",
            "description": "<p>结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.assetOriginValue",
            "description": "<p>固定资产初始值</p>"
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
            "type": "long",
            "optional": false,
            "field": "data.changeStatusDate",
            "description": "<p>状态变更时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.currOrderId",
            "description": "<p>来源订单</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.currOrderType",
            "description": "<p>订单类型   DIRECT_RENT(直租订单) COMMERCIAL_SALE_RENT(商用售租订单) CIVIL_SALE_RENT(民用售租订单) RERENT(续租订单) CHANGE(换机订单) LEASE_ADJUST(租约调整订单) CHANGE_WORK_ORDER(换机工单) THROW_LEASE(退租申请单) LEASE_SERVICE(租约服务订单)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customerName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.depreciationLife",
            "description": "<p>剩余折旧寿命</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.depreciationValue",
            "description": "<p>剩余折旧值</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.desc",
            "description": "<p>规格</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.firstActivateTime",
            "description": "<p>设备激活时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.model",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.num",
            "description": "<p>批号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.packRemainPeriod",
            "description": "<p>服务包剩余时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productName",
            "description": "<p>产品名</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.remainPeriod",
            "description": "<p>服务包剩余时长</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.rentDuration",
            "description": "<p>累计租赁时长</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.returningFactory",
            "description": "<p>返厂原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态 PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.workLife",
            "description": "<p>使用寿命</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"activateDate\": 0,\n     \"activateDateEnd\": 0,\n     \"assetOriginValue\": 0,\n     \"batNum\": \"string\",\n     \"changeStatusDate\": 0,\n     \"currOrderId\": \"string\",\n     \"currOrderType\": \"DIRECT_RENT\",\n     \"customerName\": \"string\",\n     \"depreciationLife\": 0,\n     \"depreciationValue\": 0,\n     \"desc\": \"string\",\n     \"deviceSn\": \"string\",\n     \"firstActivateTime\": 0,\n     \"model\": \"string\",\n     \"num\": \"string\",\n     \"orderType\": \"DIRECT_RENT\",\n     \"packRemainPeriod\": 0,\n     \"productName\": \"string\",\n     \"remainPeriod\": 0,\n     \"rentDuration\": 0,\n     \"returningFactory\": \"string\",\n     \"status\": \"PENDING_RENT\",\n     \"workLife\": 0\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-18T03:14:03.561Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210003",
            "description": "<p>查询租赁设备失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210004",
            "description": "<p>查询产品失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210014",
            "description": "<p>租赁设备不存在</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20219002",
            "description": "<p>查询产品失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20219011",
            "description": "<p>查询客户名称失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/getDeviceInfoByDeviceSn/{deviceSn}",
    "title": "通过设备sn获取设备信息",
    "name": "getDeviceInfoByDeviceSn",
    "group": "RentDeviceController",
    "description": "<p>通过设备sn获取设备信息</p>",
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
            "field": "deviceSn",
            "description": "<p>设备sn</p>"
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
            "field": "data.batNum",
            "description": "<p>批号</p>"
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
            "field": "data.id",
            "description": "<p>设备id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.productId",
            "description": "<p>产品id</p>"
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
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"batNum\": \"string\",\n    \"deviceSn\": \"string\",\n    \"id\": \"string\",\n    \"productId\": \"string\",\n    \"productName\": \"string\"\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-02-20T02:18:14.884Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/getDeviceLeaseEndTime/{deviceSn}",
    "title": "获取设备租期结束时间",
    "name": "getDeviceLeaseEndTime",
    "group": "RentDeviceController",
    "description": "<p>获取设备租期结束时间</p>",
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
            "field": "deviceSn",
            "description": "<p>设备sn</p>"
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
            "type": "long",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据 设备租期结束时间（毫秒）</p>"
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
          "content": "{\n  \"code\": \"string\",\n  \"data\": 0,\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-02-13T08:23:31.379Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20210015",
            "description": "<p>设备sn为空</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listDeviceDetailedDepreciationOfSsets",
    "title": "设备资产折旧明细列表",
    "name": "listDeviceDetailedDepreciationOfSsets",
    "group": "RentDeviceController",
    "description": "<p>设备资产折旧明细列表</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productPn",
            "description": "<p>料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.currOrderType",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.fixedAssetBalanceStart",
            "description": "<p>固定资产余额开始值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "query.fixedAssetBalanceEnd",
            "description": "<p>固定资产余额结束值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.assetOriginValueStartTime",
            "description": "<p>转固开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.assetOriginValueEndTime",
            "description": "<p>转固结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 0,\n   \"size\": 0,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\"\n     }\n   ],\n   \"query\": {\n     \"deviceSn\": \"string\",\n     \"productPn\": \"string\",\n     \"model\": \"string\",\n     \"currOrderType\": \"DIRECT_RENT\",\n     \"fixedAssetBalanceStart\": 0,\n     \"fixedAssetBalanceEnd\": 0,\n     \"assetOriginValueStartTime\": 0,\n     \"assetOriginValueEndTime\": 0\n   }\n }",
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
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.accumulatedDepreciation",
            "description": "<p>累计折旧额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.assetOriginValueTotal",
            "description": "<p>转固总金额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.assetOriginValueTotalBalance",
            "description": "<p>固定资产总余额</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos",
            "description": "<p>设备折旧明细数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.accumulatedDepreciation",
            "description": "<p>累计折旧</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.accumulatedIncome",
            "description": "<p>累计收入</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.assetOriginValue",
            "description": "<p>转固金额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.assetOriginValueTime",
            "description": "<p>转固金额时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.currOrderType",
            "description": "<p>渠道</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.currentDepreciation",
            "description": "<p>本期折旧</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.currentIncome",
            "description": "<p>本期收入</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.firstActivateTime",
            "description": "<p>首次激活时间</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.fixedAssetBalance",
            "description": "<p>固定资产余额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.productPn",
            "description": "<p>料号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.periodOfDepreciation",
            "description": "<p>折旧年限(年)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.depreciationOfEquipmentVos.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.totalCurrentDepreciation",
            "description": "<p>本期折旧总额</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"accumulatedDepreciation\": 0,\n         \"assetOriginValueTotal\": 0,\n         \"assetOriginValueTotalBalance\": 0,\n         \"depreciationOfEquipmentVos\": [\n           {\n             \"accumulatedDepreciation\": 0,\n             \"accumulatedIncome\": 0,\n             \"assetOriginValue\": 0,\n             \"assetOriginValueTime\": 0,\n             \"currOrderType\": \"DIRECT_RENT\",\n             \"currentDepreciation\": 0,\n             \"currentIncome\": 0,\n             \"deviceId\": \"string\",\n             \"deviceSn\": \"string\",\n             \"firstActivateTime\": 0,\n             \"fixedAssetBalance\": 0,\n             \"productPn\": \"string\",\n             \"periodOfDepreciation\": 0,\n             \"productName\": \"string\"\n           }\n         ],\n         \"totalCurrentDepreciation\": 0\n       }\n     ],\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-04-11T02:34:02.808Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listDeviceFinanceRecords",
    "title": "分页查询租赁设备关联财务记录",
    "name": "listDeviceFinanceRecords",
    "group": "RentDeviceController",
    "description": "<p>分页查询租赁设备关联财务记录</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>分页查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.[createDateEnd]",
            "description": "<p>财务记录结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.[createDateStart]",
            "description": "<p>财务记录开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceId",
            "description": "<p>租赁设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.[financeType]",
            "description": "<p>财务类型 COST(成本)INCOME(收入)DEFER(递延)</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n       \"additionalProp2\": \"asc\"\n     }\n   ],\n   \"query\": {\n     \"deviceId\": \"string\",\n     \"financeType\": \"COST\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0\n   }\n }",
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
            "description": "<p>返回对象</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.costCount",
            "description": "<p>成本汇总</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.incomeCount",
            "description": "<p>收入汇总</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.residualDeferral",
            "description": "<p>剩余递延</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.pageResponse",
            "description": "<p>分页查询数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.pageResponse.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.pageResponse.list",
            "description": "<p>分页查询数据对象集合</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.pageResponse.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.pageResponse.list.financeDetail",
            "description": "<p>财务明细项</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.pageResponse.list.financeType",
            "description": "<p>财务类型 COST(成本)INCOME(收入)DEFER(递延)</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.pageResponse.list.money",
            "description": "<p>金额</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-29T10:08:34.108+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"incomeCount\": 222,\n     \"costCount\": 245,\n     \"residualDeferral\": 1330,\n     \"pageResponse\": {\n       \"list\": [\n         {\n           \"financeType\": \"COST\",\n           \"financeDetail\": \"string\",\n           \"money\": 10,\n           \"createDate\": 1548674734392\n         }\n       ],\n        \"count\": 1\n     }\n   }\n }",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210008",
            "description": "<p>分页查询设备关联财务记录失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210009",
            "description": "<p>查询所有财务记录列表失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listDeviceLogs",
    "title": "分页查询租赁设备关联日志",
    "name": "listDeviceLogs",
    "group": "RentDeviceController",
    "description": "<p>分页查询租赁设备关联日志</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>分页查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateEnd",
            "description": "<p>日志开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateStart",
            "description": "<p>日志结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceId",
            "description": "<p>租赁设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.logType",
            "description": "<p>日志类型  ORDER_RECORD(订单/申请记录) DEVICE_STATUS_CHANGE_RECORD(设备状态变更记录) RENT_STATUS_CHANGE_RECORD(租赁状态变更记录) TENANCY_RECORD(租期记录) WORK_ORDER_RECORD(工单记录) DEVICE_DEBUGGING(设备调试) CONSUMABLES_REPLACE(耗材更换) PARTS_REPLACE(配件更换)</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n       \"additionalProp2\": \"asc\"\n     }\n   ],\n   \"query\": {\n     \"logType\": \"ORDER_RECORD\",\n     \"deviceId\": \"string\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0\n   }\n}",
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
            "description": "<p>返回对象</p>"
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
            "description": "<p>数据集合</p>"
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
            "field": "data.list.logSummary",
            "description": "<p>日志摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.logType",
            "description": "<p>日志类型</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-28T03:31:42.587+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"logType\": \"ORDER_RECORD\",\n         \"logSummary\": \"关联1张故障工单\",\n         \"createDate\": 1548491917102\n       },\n       {\n         \"logType\": \"CONSUMABLES_REPLACE\",\n         \"logSummary\": \"更换滤芯：碳棒滤芯\",\n         \"createDate\": 1548491941142\n       },\n       {\n         \"logType\": \"RENT_STATUS_CHANGE_RECORD\",\n         \"logSummary\": \"设备租约激活：待激活→租赁中\",\n         \"createDate\": 1548491961625\n       }\n     ],\n     \"count\": 3\n   }\n}",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210006",
            "description": "<p>分页查询设备日志失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listDeviceMaterials/{deviceId}",
    "title": "查询租赁设备关联耗材管理",
    "name": "listDeviceMaterials",
    "group": "RentDeviceController",
    "description": "<p>查询租赁设备关联耗材管理</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "description": "<p>返回数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.currLife",
            "description": "<p>当前剩余寿命(天)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.earlyWarningLife",
            "description": "<p>预警寿命(天)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.life",
            "description": "<p>耗材寿命(天)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.materialId",
            "description": "<p>耗材标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.name",
            "description": "<p>耗材名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态  NORMAL(正常) EXPIRING(即将到期) EXPIRED(已过期)</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-29T11:31:17.026+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": [\n     {\n       \"name\": \"我是一个配件\",\n       \"life\": 201,\n       \"earlyWarningLife\": 21,\n       \"currLife\": 100,\n       \"status\": \"NORMAL\",\n       \"materialId\": \"bf12b21737c74ef3\"\n     },\n     {\n       \"name\": \"强通透滤芯\",\n       \"life\": 202,\n       \"earlyWarningLife\": 22,\n       \"currLife\": 105,\n       \"status\": \"EXPIRING\",\n       \"materialId\": \"97a75ee3e03f4383\"\n     }\n   ]\n }",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210010",
            "description": "<p>查询所有设备耗材失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210011",
            "description": "<p>查询产品部件失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listDeviceServicePacks/{deviceId}",
    "title": "查询租赁设备关联服务包",
    "name": "listDeviceServicePacks",
    "group": "RentDeviceController",
    "description": "<p>查询租赁设备关联服务包</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
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
            "type": "long",
            "optional": false,
            "field": "data.endDate",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.remainPeriod",
            "description": "<p>剩余服务期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.servicePackName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.servicePeriod",
            "description": "<p>服务期限</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.startDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>服务包状态 HAS_ENDED(已结束) IN_USE(使用中)</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n   \"responseTime\": \"2019-01-28T03:52:56.046+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": [\n     {\n       \"servicePackName\": \"111\",\n       \"servicePeriod\": 150,\n       \"remainPeriod\": 100,\n       \"status\": \"HAS_ENDED\",\n       \"startDate\": 1548407338423,\n       \"endDate\": 1548407339423\n     },\n     {\n       \"servicePackName\": \"111\",\n       \"servicePeriod\": 100,\n       \"remainPeriod\": 10,\n       \"status\": \"IN_USE\",\n       \"startDate\": 1548407332423,\n       \"endDate\": 1548407335423\n     }\n   ]\n }",
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
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210007",
            "description": "<p>查询设备关联服务包失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listManufacturerDeviceFinanceRecords",
    "title": "分页查询厂商租赁设备关联财务记录",
    "name": "listManufacturerDeviceFinanceRecords",
    "group": "RentDeviceController",
    "description": "<p>分页查询厂商租赁设备关联财务记录</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.financeType",
            "description": "<p>财务类型  COST_FIXED/成本 INCOME_DEFERRED/收入 DEFER_PROFIT/递延 FIXED/转固</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.buyingTimeStart",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.buyingTimeEnd",
            "description": "<p>结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp3\": \"string\"\n     }\n   ]\n   \"query\": {\n     \"deviceId\": \"string\",\n     \"financeType\": \"COST\",\n     \"buyingTimeStart\": 0,\n     \"buyingTimeEnd\": 0\n   }\n }",
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
            "type": "decimal(string)",
            "optional": false,
            "field": "data.costCount",
            "description": "<p>成本汇总</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.incomeCount",
            "description": "<p>收入汇总</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.pageResponse",
            "description": "<p>分页数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.pageResponse.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.pageResponse.list",
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.pageResponse.list.buyingTime",
            "description": "<p>购买时间</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.pageResponse.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.pageResponse.list.financeDetail",
            "description": "<p>财务明细项</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.pageResponse.list.financeType",
            "description": "<p>财务类型 COST_FIXED/成本 INCOME_DEFERRED/收入 DEFER_PROFIT/递延 FIXED/转固</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.pageResponse.list.money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.residualDeferral",
            "description": "<p>剩余递延</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"costCount\": 0,\n     \"incomeCount\": 0,\n     \"pageResponse\": {\n       \"count\": 0,\n       \"list\": [\n         {\n           \"buyingTime\": 0,\n           \"financeDetail\": \"string\",\n           \"financeType\": \"COST\",\n           \"money\": 0\n         }\n       ]\n     },\n     \"residualDeferral\": 0\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-05-10T03:17:58.832Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listRentDevics",
    "title": "分页查询经销商设备管理(全部设备)",
    "name": "listRentDevics",
    "group": "RentDeviceController",
    "description": "<p>分页查询经销商设备管理(全部设备)</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>分页查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.firstActivateEndTime",
            "description": "<p>首次激活开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.firstActivateStartTime",
            "description": "<p>[ 首次激活结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "query.packRemainPeriodEnd",
            "description": "<p>服务期限开始天数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "query.packRemainPeriodStart",
            "description": "<p>服务期限结束天数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.productName",
            "description": "<p>产品名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.status",
            "description": "<p>设备状态 PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n       \"additionalProp2\": \"asc\",\n     }\n   ],\n   \"query\": {\n     \"deviceSn\": \"string\",\n     \"productName\": \"string\",\n     \"packRemainPeriodStart\": 0,\n     \"packRemainPeriodEnd\": 0,\n     \"firstActivateStartTime\": 0,\n     \"firstActivateEndTime\": 0\n   }\n }",
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
            "description": "<p>返回数据对象</p>"
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
            "description": "<p>返回数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>设备租赁标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerName",
            "description": "<p>经销商</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.firstActivateTime",
            "description": "<p>激活时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.packRemainPeriod",
            "description": "<p>服务期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productId",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态 PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-28T02:08:57.258+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"id\": \"115c4ad22bbbe487314872ed6a\",\n         \"productId\": \"e23383571e914869\",\n         \"deviceSn\": \"89001\",\n         \"productName\": \"11\",\n         \"dealerName\": null,\n         \"packRemainPeriod\": 20,\n         \"status\": \"PENDING_RENT\",\n         \"firstActivateTime\": 1000877875\n       }\n     ],\n     \"count\": 1\n   }\n }",
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
            "field": "20210002",
            "description": "<p>分页查询设备管理失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/rentDeviceRest/listRentManufacturerDevics",
    "title": "分页查询厂商设备管理(全部设备)",
    "name": "listRentManufacturerDevics",
    "group": "RentDeviceController",
    "description": "<p>分页查询厂商设备管理(全部设备)</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询参数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.firstActivateStartTime",
            "description": "<p>激活开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.firstActivateEndTime",
            "description": "<p>激活结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.statusStartDate",
            "description": "<p>状态变更开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.statusEndDate",
            "description": "<p>状态变更结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态 PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n     }\n   ],\n   \"query\": {\n     \"deviceSn\": \"string\",\n     \"productName\": \"string\",\n     \"firstActivateStartTime\": 0,\n     \"firstActivateEndTime\": 0,\n     \"statusStartDate\": 0,\n     \"statusEndDate\": 0,\n     \"status\": \"PENDING_RENT\"\n   }\n }",
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
            "description": "<p>返回数据对象</p>"
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
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备SN</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.firstActivateTime",
            "description": "<p>激活开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态 PENDING_RENT(待租赁) PENDING_ACTIVATION(待激活) LEASING(租赁中) RETURN_FACTORY(待返厂) WAITING_ENTRY(待入厂) PENDING_STORAGE(待入仓)</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.statusDate",
            "description": "<p>状态变更时间</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"deviceSn\": \"string\",\n         \"firstActivateTime\": 0,\n         \"id\": \"string\",\n         \"productId\": \"string\",\n         \"productName\": \"string\",\n         \"status\": \"PENDING_RENT\",\n         \"statusDate\": 0\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-03-18T02:51:56.049Z\",\n   \"status\": \"string\"\n }",
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
            "field": "20210002",
            "description": "<p>分页查询设备管理失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/rent/rest/controller/RentDeviceController.java",
    "groupTitle": "RentDeviceController",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/batchCreateCivilSaleRentOrder",
    "title": "批量创建民用售租订单",
    "name": "batchCreateCivilSaleRentOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>批量创建民用售租订单</p>",
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
            "type": "file",
            "optional": false,
            "field": "filename",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array(string)",
            "optional": false,
            "field": "failInfo",
            "description": "<p>失败信息</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否全部成功</p>"
          },
          {
            "group": "Success 200",
            "type": "array(string)",
            "optional": false,
            "field": "successInfo",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"failInfo\": [\n    \"string\"\n  ],\n  \"success\": true,\n  \"successInfo\": [\n    \"string\"\n  ]\n}",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
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
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
    "description": "<p>取消订单服务包预购(民用售租单和租约服务单均使用此接口取消预购)</p>",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/closeCivilSaleRentOrder/{rentOrderId}",
    "title": "关闭民用售租订单",
    "name": "closeCivilSaleRentOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>关闭民用售租订单</p>",
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
            "field": "rentOrderId",
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
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-31T08:31:36.522Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20215005",
            "description": "<p>售租订单不存在</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215037",
            "description": "<p>只能关闭待审核状态的订单</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/closeCommercialSaleRentOrder/{rentOrderId}",
    "title": "关闭商用售租订单",
    "name": "closeCommercialSaleRentOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>关闭商用售租订单</p>",
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
            "field": "rentOrderId",
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
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-31T08:31:36.522Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20215005",
            "description": "<p>售租订单不存在</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215037",
            "description": "<p>只能关闭待审核状态的订单</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/continueCivilSaleOrder",
    "title": "售租订单审核后，继续流转",
    "name": "continueCivilSaleOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>售租订单审核后，继续流转</p>",
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
            "field": "checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "checkStatus",
            "description": "<p>审核状态 同意ASSENT/驳回REJECT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"checkId\": \"string\",\n  \"checkStatus\": \"ASSENT\"\n}",
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
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-31T08:25:08.803Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20215033",
            "description": "<p>审核标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215034",
            "description": "<p>审核状态为空</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/continueCommercialSaleOrder",
    "title": "售租订单审核后，继续流转",
    "name": "continueCommercialSaleOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>售租订单审核后，继续流转</p>",
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
            "field": "checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "checkStatus",
            "description": "<p>审核状态 同意ASSENT/驳回REJECT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"checkId\": \"string\",\n  \"checkStatus\": \"ASSENT\"\n}",
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
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-31T08:19:25.161Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20215033",
            "description": "<p>审核标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215034",
            "description": "<p>审核状态为空</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/createCivilSaleRentOrder",
    "title": "创建民用商用售租订单",
    "name": "createCivilSaleRentOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>创建民用商用售租订单</p>",
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
            "field": "acceptRegion",
            "description": "<p>收货地区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addressDetail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "amount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consignee",
            "description": "<p>收货人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rentPeriod",
            "description": "<p>租期</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "saleRentProduct",
            "description": "<p>产品信息</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "saleRentProduct.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "saleRentProduct.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentProduct.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentProduct.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentProduct.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentProduct.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentProduct.unit",
            "description": "<p>单位 TAI台</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "saleRentProduct.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "saleRentSerivcePacks",
            "description": "<p>服务包信息</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "saleRentSerivcePacks.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "saleRentSerivcePacks.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.packId",
            "description": "<p>服务包标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.packName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "saleRentSerivcePacks.packPeriod",
            "description": "<p>服务包期限</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.packPn",
            "description": "<p>服务包料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.unit",
            "description": "<p>单位 TAI台</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "saleRentSerivcePacks.packOrder",
            "description": "<p>服务包序号</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "saleRentSerivcePacks.unitPrice",
            "description": "<p>单价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"acceptRegion\": \"string\",\n  \"addressDetail\": \"string\",\n  \"amount\": 0,\n  \"comment\": \"string\",\n  \"consignee\": \"string\",\n  \"contactNum\": \"string\",\n  \"dealerId\": \"string\",\n  \"markerCenterId\": \"string\",\n  \"rentPeriod\": 0,\n  \"saleRentProduct\": {\n    \"amount\": 0,\n    \"number\": 0,\n    \"productId\": \"string\",\n    \"productModel\": \"string\",\n    \"productName\": \"string\",\n    \"productPn\": \"string\",\n    \"unit\": \"TAI\",\n    \"unitPrice\": 0\n  },\n  \"saleRentSerivcePacks\": [\n    {\n      \"amount\": 0,\n      \"number\": 0,\n      \"packId\": \"string\",\n      \"packName\": \"string\",\n      \"packPeriod\": 0,\n      \"packPn\": \"string\",\n      \"unit\": \"TAI\",\n      \"unitPrice\": 0\n    }\n  ]\n}",
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
            "description": "<p>返回数据 订单标识</p>"
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
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"string\",\n  \"data\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-31T08:01:09.905Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20215036",
            "description": "<p>售租产品为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215023",
            "description": "<p>售租订单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215024",
            "description": "<p>经销商标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215035",
            "description": "<p>租期为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215026",
            "description": "<p>收货区域为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215027",
            "description": "<p>详细地址为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215028",
            "description": "<p>收货人名称为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215029",
            "description": "<p>联系方式为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215031",
            "description": "<p>更新资金池失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215030",
            "description": "<p>资金池不足，未成功扣款，订单创建失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/createSaleRentOrder",
    "title": "创建商用售租订单",
    "name": "createSaleRentOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>创建商用售租订单</p>",
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
            "field": "acceptRegion",
            "description": "<p>收货地区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addressDetail",
            "description": "<p>收货地址</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "amount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "productPacks",
            "description": "<p>产品服务包信息</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "productPacks.saleRentProduct",
            "description": "<p>产品信息</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "productPacks.saleRentProduct.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productPacks.saleRentProduct.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentProduct.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentProduct.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentProduct.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentProduct.productPn",
            "description": "<p>产品序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentProduct.unit",
            "description": "<p>单位 TAI台</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "productPacks.saleRentProduct.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack",
            "description": "<p>服务包信息</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.packId",
            "description": "<p>服务包标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.packName",
            "description": "<p>服务包名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.packPeriod",
            "description": "<p>服务包权限 单位为年</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.packPn",
            "description": "<p>服务包料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.unit",
            "description": "<p>单位 TAI台</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.packOrder",
            "description": "<p>服务包序号 从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "productPacks.saleRentSerivcePack.unitPrice",
            "description": "<p>单价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"acceptRegion\": \"string\",\n  \"accountPeriodId\": \"string\",\n  \"addressDetail\": \"string\",\n  \"amount\": 0,\n  \"comment\": \"string\",\n  \"consignee\": \"string\",\n  \"contactNum\": \"string\",\n  \"dealerId\": \"string\",\n  \"markerCenterId\": \"string\",\n  \"productPacks\": [\n    {\n      \"saleRentProduct\": {\n        \"amount\": 0,\n        \"number\": 0,\n        \"productId\": \"string\",\n        \"productModel\": \"string\",\n        \"productName\": \"string\",\n        \"productPn\": \"string\",\n        \"unit\": \"TAI\",\n        \"unitPrice\": 0\n      },\n      \"saleRentSerivcePack\": {\n        \"amount\": 0,\n        \"number\": 0,\n        \"packId\": \"string\",\n        \"packName\": \"string\",\n        \"packPeriod\": 0,\n        \"packPn\": \"string\",\n        \"unit\": \"TAI\",\n        \"unitPrice\": 0\n      }\n    }\n  ]\n}",
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
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据 订单标识</p>"
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
          "content": "{\n  \"code\": \"string\",\n  \"data\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-31T07:50:01.503Z\",\n  \"status\": \"string\"\n}",
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
            "field": "20215023",
            "description": "<p>产品或服务包信息为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215024",
            "description": "<p>经销商标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215025",
            "description": "<p>账期方式标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215026",
            "description": "<p>收货区域为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215027",
            "description": "<p>详细地址为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215028",
            "description": "<p>收货人名称为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215029",
            "description": "<p>联系方式为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107012",
            "description": "<p>首期账期节点为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107013",
            "description": "<p>付款比例为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215031",
            "description": "<p>更新资金池失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215030",
            "description": "<p>资金池不足，未成功扣款，订单创建失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/exportCivilRentOrderList",
    "title": "民用售租订单列表导出",
    "name": "exportCivilRentOrderList",
    "group": "SaleRentOrderRestController",
    "description": "<p>民用售租订单列表导出</p>",
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
            "type": "array(object)",
            "optional": true,
            "field": "columns",
            "description": "<p>列信息数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.code",
            "description": "<p>列编码（英文）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.name",
            "description": "<p>列名称（中文）</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "ids",
            "description": "<p>订单标识数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"ids\": [\n     \"string\"\n   ]\n }",
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
            "field": "20210016",
            "description": "<p>查询经销商信息失败</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-rent-rest/saleRentOrderRest/exportCommercialSaleRentOrder",
    "title": "导出商用售租订单数据",
    "name": "exportCommercialSaleRentOrder",
    "group": "SaleRentOrderRestController",
    "description": "<p>导出商用售租订单数据</p>",
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
            "type": "array(object)",
            "optional": true,
            "field": "columns",
            "description": "<p>列信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.code",
            "description": "<p>列编码（英文）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.name",
            "description": "<p>列名称（中文）</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "ids",
            "description": "<p>订单标识数组</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20215019",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
            "description": "<p>单位</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
            "type": "string",
            "optional": false,
            "field": "data.orderPackId",
            "description": "<p>订单服务包标识</p>"
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
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
          "title": "Error-Response: ",
          "content": "    { \"responseTime\": \"2019-01-02T09:47:15.032+0000\", \"code\": \"20107007\",\n\"status\": \"200\", \"msg\": \"fail to add account period\", \"data\": null }",
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
          "title": "Header-Example: ",
          "content": "{\"Access-Token\":\"访问凭证\",\"Content-Type\":\"application/json\"}",
          "type": "json"
        }
      ]
    }
  }
] });
