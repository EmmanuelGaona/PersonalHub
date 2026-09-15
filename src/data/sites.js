const types = {
    QUANTASITES: "Quanta sites",
    PROJECTS:"Projects",
    OTHERS:"Others"
}

const sites = [
    /* QuantaSites */
    {
        type: types.QUANTASITES,
        name: "Quanta HR",
        url: "https://hr.qmmcmx.com/HRUI/Webui/",
        msg: "Overtime, attendancy, permissions, etc. ",
    },
    {
        type: types.QUANTASITES,
        name: "OverTime",
        url: "https://hr.qmmcmx.com/HROldPages/Attn/Modify_emba_assistant_min.aspx?Site=QMMC&Flag=6&languageType=en-US",
        msg: "Overtime, attendancy, permissions, etc. ",
    },
    {
        type: types.QUANTASITES,
        name: "Apply for leave",
        url: "https://hr.qmmcmx.com/HR/AttnData/Modify_Leav.aspx?Site=QMMC&RoleType=6&languageType=en-US",
        msg: "Overtime, attendancy, permissions, etc. ",
    },
    {
        type: types.QUANTASITES,
        name: "Attendance",
        url: "https://hr.qmmcmx.com/HROldPages/Attn/Modify_Attandence_assistant_min.aspx?Site=QMMC&Flag=4&languageType=en-US",
        msg: "Overtime, attendancy, permissions, etc. ",
    },
    {
        type: types.QUANTASITES,
        name: "IWorkFlow",
        url: "https://iworkflow/Default.aspx",
        msg: "Application forms",
    },
    {
        type: types.QUANTASITES,
        name: "Server",
        url: "https://10.80.17.38/client/login/index",
        msg: "Server, deploy projects",
    },
    /* Projects */
    {
        type: types.PROJECTS,
        name: "SelfCheckout Download",
        url: "https://checkout.qmmcmx.com/#/download",
        msg: "Dedicated site to download SelfCheckout",
    }, 
    {
        type: types.PROJECTS,
        name: "Checkout Login",
        url: "http://10.80.17.60:8091/#/login",
        msg: "Users Registration Site for SelfCheckout",
    }, 
    {
        type: types.PROJECTS,
        name: "RaspCheckOut",
        url: "http://10.80.17.60:8091/#/raspcheckout",
        msg: "Guard's checkout system to complete checkout process",
    }, 
    {
        type: types.PROJECTS,
        name: "Phone Validation",
        url: "http://10.80.17.60:7000/",
        msg: "Phone validation registration and login site",  
    },
    {
        type: types.PROJECTS,
        name: "MeetingRooms",
        url: "http://10.80.17.60:3051/login",
        msg: "Dedicated app to manage meeting rooms appointments",  
    },
    {
        type: types.PROJECTS,
        name: "Asset Manager",
        url: "http://10.80.17.60:3000/dashboard",
        msg: "Manage IT assets on dedicated app",   
    },
    {
        type: types.PROJECTS,
        name: "Front Template",
        url: "http://localhost:5173/landing",
        msg: "Front template", 
    },
    {
        type: types.PROJECTS,
        name: "Hr Internal",
        url: "http://10.80.17.60:3002",
        msg: "Internal Hr vacancies manager",
    },
    /* Others */
    {
        type: types.OTHERS,
        name: "STIRLING PDF",
        url: "http://10.80.17.60:9000/?lang=en_US",
        msg: "Usefull tools that can be used to a manipulete PDFs",
    }, 
    {
        type: types.OTHERS,
        name: "Reports",
        url: "https://qmmcmx.sharepoint.com/:x:/r/sites/MIS-Software2/_layouts/15/Doc.aspx?sourcedoc=%7BCAFE8264-01A1-4C47-9003-CA7E6EF75E2F%7D&file=MIS-Software%20Reports%202026.xlsx&action=default&mobileredirect=true",
        msg: "MIS weekly reports", 
    },
]

export default sites