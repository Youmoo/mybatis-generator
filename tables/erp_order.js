module.exports = [
    {
        'Field': "id",
        'Type': "int(11)",
        'Null': "NO",
        'Key': "PRI",
        'Default': null,
        'Extra': "auto_increment"
    },
    {
        'Field': "is_deleted",
        'Type': "varchar(1)",
        'Null': "NO",
        'Key': "",
        'Default': "N",
        'Extra': ""
    },
    {
        'Field': "creator",
        'Type': "int(11)",
        'Null': "NO",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "gmt_create",
        'Type': "datetime",
        'Null': "NO",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "modifier",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "gmt_modified",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_type",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': "1",
        'Extra': ""
    },
    {
        'Field': "is_main",
        'Type': "int(11)",
        'Null': "NO",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "is_detail",
        'Type': "int(11)",
        'Null': "NO",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_id",
        'Type': "int(11)",
        'Null': "NO",
        'Key': "MUL",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_sn",
        'Type': "varchar(20)",
        'Null': "YES",
        'Key': "MUL",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "delivery_no",
        'Type': "varchar(20)",
        'Null': "YES",
        'Key': "MUL",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "province_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "city_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "district_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "street_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "company_name",
        'Type': "varchar(50)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "mobile",
        'Type': "varchar(60)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "city_station_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "warehouse_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "sale_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "sale_name",
        'Type': "varchar(128)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_excu_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_excu_name",
        'Type': "varchar(128)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_amount",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "close_type",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "new_order_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "trade_status",
        'Type': "varchar(10)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_create_time",
        'Type': "datetime",
        'Null': "NO",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "order_goods_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "UNI",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "goods_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "goods_sn",
        'Type': "varchar(20)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "goods_name",
        'Type': "varchar(120)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "goods_format",
        'Type': "varchar(255)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "goods_number",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "measure_unit",
        'Type': "varchar(32)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "min_measure_unit",
        'Type': "varchar(32)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "conversion_value",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "goods_price",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "sold_price",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "single_price",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "min_unit_price",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "receive_amount",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "discount_amount",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "return_amount",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "receive_cash_date",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "refund_date",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "send_date",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "sign_date",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "return_in_ware_date",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "return_number",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "user_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "shipping_fee",
        'Type': "decimal(10,2)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "shipping_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "pay_channel",
        'Type': "varchar(100)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "pay_type",
        'Type': "varchar(100)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "print_time",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "pay_status",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "pay_no",
        'Type': "varchar(50)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "pay_time",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "need_transfer_qty",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "plan_status",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "transfer_status",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': "0",
        'Extra': ""
    },
    {
        'Field': "plan_priority",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': "0",
        'Extra': ""
    },
    {
        'Field': "attributes",
        'Type': "varchar(1000)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "seller_id",
        'Type': "int(11)",
        'Null': "NO",
        'Key': "",
        'Default': "1",
        'Extra': ""
    },
    {
        'Field': "seller_nick",
        'Type': "varchar(255)",
        'Null': "NO",
        'Key': "",
        'Default': "淘汽档口",
        'Extra': ""
    },
    {
        'Field': "appointment_time",
        'Type': "datetime",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "consignee",
        'Type': "varchar(60)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "address",
        'Type': "varchar(255)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    },
    {
        'Field': "stock_allocation_id",
        'Type': "int(11)",
        'Null': "YES",
        'Key': "",
        'Default': null,
        'Extra': ""
    }
]
