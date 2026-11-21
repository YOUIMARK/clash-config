function main(config) {
  config.mode = "rule";

  config["proxy-groups"] = [
    { name: "proxy", type: "select", "include-all": true, "exclude-type": "direct" },
    { name: "Google", type: "select", "include-all": true, "exclude-type": "direct" },
    { name: "YouTube", type: "select", "include-all": true, "exclude-type": "direct" },
    { name: "Telegram", type: "select", "include-all": true, "exclude-type": "direct" },
    { name: "Twitter", type: "select", "include-all": true, "exclude-type": "direct" },
    { name: "Meta", type: "select", "include-all": true, "exclude-type": "direct" },
    { name: "AI", type: "select", "include-all": true, "exclude-type": "direct" }
  ];

  config.rules = [
    "AND,((NETWORK,UDP),(DST-PORT,443)),REJECT",

    "GEOSITE,private,DIRECT",
    "GEOIP,private,DIRECT,no-resolve",

    "DOMAIN,bce.baidu.com,DIRECT",
    "GEOSITE,category-ads-all,REJECT",

    "GEOSITE,meta,Meta",
    "GEOSITE,facebook,Meta",
    "GEOSITE,instagram,Meta",
    "GEOSITE,whatsapp,Meta",
    "GEOSITE,category-ai-!cn,AI",
    "GEOSITE,telegram,Telegram",
    "GEOIP,telegram,Telegram,no-resolve",
    "GEOSITE,google,Google",
    "GEOSITE,youtube,YouTube",
    "GEOSITE,twitter,Twitter",

    "GEOSITE,cn,DIRECT",
    "GEOIP,CN,DIRECT",

    "MATCH,proxy"
  ];

  return config;
}
