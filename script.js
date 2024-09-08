// JSON data from the uploaded file
const reraData = [
    {
        "PROMOTER NAME": "5T INFRAPROJECTS PRIVATE LIMITED",
        "PROJECT NAME": "LEGACY GRAND",
        "REGISTRATION NUMBER": "RP/19/2023/00884"
    },
    {
        "PROMOTER NAME": "A ONE INFRAVENTURE",
        "PROJECT NAME": "SHAKTI ENCLAVE",
        "REGISTRATION NUMBER": "MP/03/2024/01239"
    },
    {
        "PROMOTER NAME": "A1 Infrastructures Pvt. Ltd.",
        "PROJECT NAME": "Moksha Vilas",
        "REGISTRATION NUMBER": "RP/19/2022/00642"
    },
{
        "PROMOTER NAME": "AADESH CONSTRUCTION",
        "PROJECT NAME": "Aadesh Enclave",
        "REGISTRATION NUMBER": "RP/19/2022/00631"
    },
    {
        "PROMOTER NAME": "AADIEPADMA CONSTRUCTIONS PRIVATE LIMITED",
        "PROJECT NAME": "SAI SUBRAT GREENS",
        "REGISTRATION NUMBER": "RP/19/2024/01234"
    },
    {
        "PROMOTER NAME": "AASTIK INFRA PROJECT PVT LTD",
        "PROJECT NAME": "AASTIK ASPIRE",
        "REGISTRATION NUMBER": "RP/19/2022/00663"
    },
    {
        "PROMOTER NAME": "AASTIK INFRA PROJECT PVT LTD",
        "PROJECT NAME": "AASTIK ASHARYA",
        "REGISTRATION NUMBER": "RP/19/2023/00983"
    },
    {
        "PROMOTER NAME": "ABAS DEVELOPER",
        "PROJECT NAME": "ROHINI RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2023/01050"
    },
    {
        "PROMOTER NAME": "ABN BUILDCON",
        "PROJECT NAME": "MILLENNIALS TINU COLONY",
        "REGISTRATION NUMBER": "MP/11/2023/01075"
    },
    {
        "PROMOTER NAME": "ABODES ODISHA",
        "PROJECT NAME": "DIVINE ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00747"
    },
    {
        "PROMOTER NAME": "ABSOLUTECONTECH PRIVATE LIMITED",
        "PROJECT NAME": "TEJAS ENCLAVE",
        "REGISTRATION NUMBER": "RP/11/2023/00938"
    },
    {
        "PROMOTER NAME": "ACHIEVE CONSTRUCTION PRIVATE LIMITED",
        "PROJECT NAME": "ACPL SRISTHI",
        "REGISTRATION NUMBER": "MP/03/2024/01231"
    },
    {
        "PROMOTER NAME": "ACRERISE REALTY LLP",
        "PROJECT NAME": "AcreRise AURA",
        "REGISTRATION NUMBER": "RP/07/2023/00855"
    },
    {
        "PROMOTER NAME": "ACRERISE REALTY LLP",
        "PROJECT NAME": "AcreRise AURA PH - II",
        "REGISTRATION NUMBER": "RP/07/2023/00965"
    },
    {
        "PROMOTER NAME": "ACRERISE REALTY LLP",
        "PROJECT NAME": "AcreRise AZURE",
        "REGISTRATION NUMBER": "RP/07/2024/01240"
    },
    {
        "PROMOTER NAME": "Adi Infra",
        "PROJECT NAME": "A1 Lagoon",
        "REGISTRATION NUMBER": "MP/26/2024/01210"
    },
    {
        "PROMOTER NAME": "Adishakti Construction and Real Estate",
        "PROJECT NAME": "ADI KESHAB",
        "REGISTRATION NUMBER": "RP/11/2022/00799"
    },
    {
        "PROMOTER NAME": "ADISMARAN LIFESTYLES PROPERTIES PVT LTD",
        "PROJECT NAME": "ADITYA ASHRAY",
        "REGISTRATION NUMBER": "RP/19/2022/00817"
    },
    {
        "PROMOTER NAME": "Ahalya Constructions Private Limited",
        "PROJECT NAME": "Ahalya Palace",
        "REGISTRATION NUMBER": "RP/19/2019/00325"
    },
    {
        "PROMOTER NAME": "ALAKA ENGINEERING",
        "PROJECT NAME": "AMRUT ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00662"
    },
    {
        "PROMOTER NAME": "ALAKA ENGINEERING",
        "PROJECT NAME": "AMRUT ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2024/01083"
    },
    {
        "PROMOTER NAME": "ALISHAN REALCON PRIVATE LIMITED",
        "PROJECT NAME": "NETRA GALAXY",
        "REGISTRATION NUMBER": "RP/07/2022/00795"
    },
    {
        "PROMOTER NAME": "ALL ODISHA STATE BANK  OFFICERS  HOUSING CO-OPERATIVE SOCIETY LTD.",
        "PROJECT NAME": "GRACE",
        "REGISTRATION NUMBER": "RP/19/2022/00670"
    },
    {
        "PROMOTER NAME": "ALL ODISHA STATE BANK OFFICERS HOUSING CO-OPERATIVE SOCIETY LTD.",
        "PROJECT NAME": "GRACE",
        "REGISTRATION NUMBER": "RP/19/2021/00448"
    },
    {
        "PROMOTER NAME": "ALLIANZ ESTATE",
        "PROJECT NAME": "ALLIANZ PRIME",
        "REGISTRATION NUMBER": "MP/11/2022/00776"
    },
    {
        "PROMOTER NAME": "ALLIANZ ESTATE & INFRASTRUCTURAL DEVELOPMENT",
        "PROJECT NAME": "HIGHWAY HORIZON",
        "REGISTRATION NUMBER": "MP/11/2021/00626"
    },
    {
        "PROMOTER NAME": "ALLIANZ INFRA",
        "PROJECT NAME": "ALLIANZ GODAVARI HEIGHTS",
        "REGISTRATION NUMBER": "MP/11/2024/01146"
    },
    {
        "PROMOTER NAME": "ALLIANZ PROPERTIES",
        "PROJECT NAME": "ALLIANZ-ELEGANCE",
        "REGISTRATION NUMBER": "RP/11/2023/01020"
    },
    {
        "PROMOTER NAME": "ALTZEB ESTATES PRIVATE LIMITED",
        "PROJECT NAME": "NORTH BOULEVARD",
        "REGISTRATION NUMBER": "RP/19/2024/01200"
    },
    {
        "PROMOTER NAME": "AM SB INFRA PVT LTD",
        "PROJECT NAME": "PRISTINE ORCHID -1",
        "REGISTRATION NUMBER": "RP/19/2023/01033"
    },
    {
        "PROMOTER NAME": "Anang Uday Singh Deo",
        "PROJECT NAME": "MEADOWS 1",
        "REGISTRATION NUMBER": "RP/02/2020/00352"
    },
    {
        "PROMOTER NAME": "Anang Uday Singh Deo",
        "PROJECT NAME": "Meadows 2",
        "REGISTRATION NUMBER": "RP/02/2021/00474"
    },
    {
        "PROMOTER NAME": "Anang Uday Singh Deo",
        "PROJECT NAME": "MEADOWS 3",
        "REGISTRATION NUMBER": "RP/02/2021/00587"
    },
    {
        "PROMOTER NAME": "ANIMESH MOHAPATRA",
        "PROJECT NAME": "AMBIKA HOMES",
        "REGISTRATION NUMBER": "RP/22/2023/00848"
    },
    {
        "PROMOTER NAME": "Anuj Times Square Realty Private Limited",
        "PROJECT NAME": "ATR PREMIUM",
        "REGISTRATION NUMBER": "RP/19/2024/01093"
    },
    {
        "PROMOTER NAME": "APB EDUCATION TRUST",
        "PROJECT NAME": "TRANQUIL GARDEN",
        "REGISTRATION NUMBER": "RP/07/2022/00713"
    },
    {
        "PROMOTER NAME": "ARHAM BUILDCON",
        "PROJECT NAME": "ARHAM RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2022/00653"
    },
    {
        "PROMOTER NAME": "ARYANS INFRASTRUCTURE PVT. LTD.",
        "PROJECT NAME": "ARYAVARTA",
        "REGISTRATION NUMBER": "RP/07/2022/00834"
    },
    {
        "PROMOTER NAME": "ARYANS INVESTA INFRASTRUCTURE PVT LTD",
        "PROJECT NAME": "TAMARIND TERRACES- BLOCK A",
        "REGISTRATION NUMBER": "MP/19/2022/00829"
    },
    {
        "PROMOTER NAME": "Ashiana Realty LLP",
        "PROJECT NAME": "Ashiana Elegance",
        "REGISTRATION NUMBER": "RP/19/2022/00820"
    },
    {
        "PROMOTER NAME": "ASHISH ENTERPRISES",
        "PROJECT NAME": "KRISHNA TOWER",
        "REGISTRATION NUMBER": "MP/30/2022/00742"
    },
    {
        "PROMOTER NAME": "Ashiyana Realcon Private Limited",
        "PROJECT NAME": "APPLE HEIGHTS",
        "REGISTRATION NUMBER": "RP/03/2023/01032"
    },
    {
        "PROMOTER NAME": "ASHOK KUMAR MISHRA",
        "PROJECT NAME": "GOURA NAGAR",
        "REGISTRATION NUMBER": "RP/01/2023/01047"
    },
    {
        "PROMOTER NAME": "ASRA REALTORS LLP",
        "PROJECT NAME": "ASRA GARDENS",
        "REGISTRATION NUMBER": "RP/22/2024/01251"
    },
    {
        "PROMOTER NAME": "ASSOCIATES INFRA DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "GREATER SAMBALPUR KAUSHALYA",
        "REGISTRATION NUMBER": "RP/28/2022/00773"
    },
    {
        "PROMOTER NAME": "ASSOCIATES INFRA DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "GREATER SAMBALPUR KRISHNA VATIKA",
        "REGISTRATION NUMBER": "RP/28/2024/01187"
    },
    {
        "PROMOTER NAME": "ASWIKA MULTIPLEX PRIVATE LIMITED",
        "PROJECT NAME": "ASWIKA VILLA",
        "REGISTRATION NUMBER": "RP/07/2024/01183"
    },
    {
        "PROMOTER NAME": "ATS DEVELOPER",
        "PROJECT NAME": "R.R.RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01084"
    },
    {
        "PROMOTER NAME": "AUM ASSET AND PROJECTS",
        "PROJECT NAME": "OM PLAZA",
        "REGISTRATION NUMBER": "RP/01/2022/00814"
    },
    {
        "PROMOTER NAME": "AYESHA SANTOSH ONE INFRASTRUCTURE PRIVATE LIMITED",
        "PROJECT NAME": "MATRIX",
        "REGISTRATION NUMBER": "RP/19/2023/01036"
    },
    {
        "PROMOTER NAME": "B3 CREATION PRIVATE LIMITED",
        "PROJECT NAME": "B3 SUNRISE",
        "REGISTRATION NUMBER": "RP/19/2023/01001"
    },
    {
        "PROMOTER NAME": "BABAMANI ESTATE & DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "PEACE VILLAS",
        "REGISTRATION NUMBER": "RP/19/2024/01140"
    },
    {
        "PROMOTER NAME": "BAISHNODEVI ENGINEERS AND CONSULTANCY PRIVATE LIMITED",
        "PROJECT NAME": "Sai Subas",
        "REGISTRATION NUMBER": "RP/19/2023/01011"
    },
    {
        "PROMOTER NAME": "Bajrang Lal Agarwal",
        "PROJECT NAME": "VIVAN GALAXY",
        "REGISTRATION NUMBER": "RP/30/2023/01063"
    },
    {
        "PROMOTER NAME": "Banamali Sethi",
        "PROJECT NAME": "RK Home Developers",
        "REGISTRATION NUMBER": "RP/11/2023/00996"
    },
    {
        "PROMOTER NAME": "BARSANA PROPERTIES PVT LTD",
        "PROJECT NAME": "SEETA PADMA NIVAS",
        "REGISTRATION NUMBER": "RP/19/2023/00963"
    },
    {
        "PROMOTER NAME": "BARSANEWARI ESTATES PVT LTD",
        "PROJECT NAME": "BARSANE",
        "REGISTRATION NUMBER": "RP/19/2023/00859"
    },
    {
        "PROMOTER NAME": "Basant Kumar Palo",
        "PROJECT NAME": "Mukteswar Tower Annex",
        "REGISTRATION NUMBER": "RP/11/2020/00359"
    },
    {
        "PROMOTER NAME": "Basant Kumar Palo",
        "PROJECT NAME": "Mukteswar residency",
        "REGISTRATION NUMBER": "RP/11/2020/00360"
    },
    {
        "PROMOTER NAME": "BELIEVE REALTY INFRA",
        "PROJECT NAME": "CHITARANJAN HEIGHTS",
        "REGISTRATION NUMBER": "RP/11/2022/00629"
    },
    {
        "PROMOTER NAME": "BEYOND HOMES",
        "PROJECT NAME": "E1-GRAND",
        "REGISTRATION NUMBER": "RP/19/2023/01014"
    },
    {
        "PROMOTER NAME": "BHAVANI REAL ESTATES",
        "PROJECT NAME": "TULASI ASHIANA",
        "REGISTRATION NUMBER": "RP/11/2022/00715"
    },
    {
        "PROMOTER NAME": "BHAVANI REAL ESTATES",
        "PROJECT NAME": "TULASI ASHIANA",
        "REGISTRATION NUMBER": "RP/11/2024/01217"
    },
    {
        "PROMOTER NAME": "Bhawani Apartment Private Limited",
        "PROJECT NAME": "BHAWANI LEELA RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2021/00621"
    },
    {
        "PROMOTER NAME": "Bhawani Apartment Private Limited",
        "PROJECT NAME": "BHAWANI UMA PLAZA",
        "REGISTRATION NUMBER": "MP/07/2023/00975"
    },
    {
        "PROMOTER NAME": "BHAWANI MULTI ACRES PRIVATE LIMITED",
        "PROJECT NAME": "BHAWANI AYAN",
        "REGISTRATION NUMBER": "RP/19/2024/01212"
    },
    {
        "PROMOTER NAME": "BHOOMI SANRACHNA CREATION PVT. LTD.",
        "PROJECT NAME": "ROYAL PARADISE",
        "REGISTRATION NUMBER": "RP/19/2023/01023"
    },
    {
        "PROMOTER NAME": "BHUBANESWAR DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "SHYAM RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01169"
    },
    {
        "PROMOTER NAME": "Bibhabasu Dash",
        "PROJECT NAME": "Kesav Aawas",
        "REGISTRATION NUMBER": "RP/19/2023/00940"
    },
    {
        "PROMOTER NAME": "BIDHU BHUSHAN RATH",
        "PROJECT NAME": "KAMAKSHI",
        "REGISTRATION NUMBER": "RP/19/2023/00856"
    },
    {
        "PROMOTER NAME": "Bivab Yashila LLP",
        "PROJECT NAME": "Bivab Yashila",
        "REGISTRATION NUMBER": "MP/26/2023/01025"
    },
    {
        "PROMOTER NAME": "BLUEARK INFRAVENTURE PRIVATE LIMITED",
        "PROJECT NAME": "BLUE RIDGE",
        "REGISTRATION NUMBER": "RP/07/2024/01202"
    },
    {
        "PROMOTER NAME": "BLUEPRINT CONSTRUCTIONS",
        "PROJECT NAME": "BLUEPRINT SIGNATURE",
        "REGISTRATION NUMBER": "RP/19/2024/01103"
    },
    {
        "PROMOTER NAME": "BRAHMAPUR DEVELOPMENT AUTHORITY",
        "PROJECT NAME": "GANJAM HAAT & COMMERCIAL COMPLEX",
        "REGISTRATION NUMBER": "CP/11/2024/01236"
    },
    {
        "PROMOTER NAME": "BRICK BY BRICK",
        "PROJECT NAME": "ALSA ABODE",
        "REGISTRATION NUMBER": "RP/19/2022/00741"
    },
    {
        "PROMOTER NAME": "BRINDAVAN DHAM",
        "PROJECT NAME": "BRINDAVAN DHAM",
        "REGISTRATION NUMBER": "PS/02/2022/00649"
    },
    {
        "PROMOTER NAME": "CANDLESAI DEVELOPERS PVT LTD",
        "PROJECT NAME": "SUGARCANE APARTMENT",
        "REGISTRATION NUMBER": "RP/19/2022/00765"
    },
    {
        "PROMOTER NAME": "CARNEX SALES AGENCIES PRIVATE LIMITED",
        "PROJECT NAME": "Samridhi Tower",
        "REGISTRATION NUMBER": "MP/30/2022/00658"
    },
    {
        "PROMOTER NAME": "CATALYST HOMES PVT. LTD.",
        "PROJECT NAME": "CATALYST VILLAS",
        "REGISTRATION NUMBER": "RP/19/2023/00897"
    },
    {
        "PROMOTER NAME": "CEE DEE BUILDERS PRIVATE LIMITED",
        "PROJECT NAME": "Cee Dee Bhagwan Villa",
        "REGISTRATION NUMBER": "RP/19/2021/00623"
    },
    {
        "PROMOTER NAME": "Chakaakhi Construction",
        "PROJECT NAME": "CHAKAAKHI\u2019S HEMALATA ENCLAVE",
        "REGISTRATION NUMBER": "RP/26/2022/00801"
    },
    {
        "PROMOTER NAME": "Chanda Constructions",
        "PROJECT NAME": "LA MAISON",
        "REGISTRATION NUMBER": "RP/19/2024/01151"
    },
    {
        "PROMOTER NAME": "Chandaka Meadows",
        "PROJECT NAME": "Chandaka Meadows Block-C & E",
        "REGISTRATION NUMBER": "RP/19/2022/00832"
    },
    {
        "PROMOTER NAME": "Chandan Raj Construction",
        "PROJECT NAME": "SAI CHANDAN ROYAL",
        "REGISTRATION NUMBER": "RP/19/2024/01197"
    },
    {
        "PROMOTER NAME": "CHANDI PRASAD BASTIA",
        "PROJECT NAME": "SRI SAI RESIDENCY",
        "REGISTRATION NUMBER": "RP/07/2023/01054"
    },
    {
        "PROMOTER NAME": "Chitta Ranjan Senapati",
        "PROJECT NAME": "Harekrushna Enclave",
        "REGISTRATION NUMBER": "RP/19/2024/01107"
    },
    {
        "PROMOTER NAME": "CHOUDHURY & SON CONSTRUCTIONS",
        "PROJECT NAME": "BEST HOME",
        "REGISTRATION NUMBER": "RP/11/2024/01087"
    },
    {
        "PROMOTER NAME": "CITICON ENGINEERS LTD",
        "PROJECT NAME": "TRISHNA NAGAR",
        "REGISTRATION NUMBER": "RP/07/2023/01069"
    },
    {
        "PROMOTER NAME": "CONFINITY CONTECH PVT LTD",
        "PROJECT NAME": "CONFINITY HARMONY",
        "REGISTRATION NUMBER": "RP/19/2022/00818"
    },
    {
        "PROMOTER NAME": "COSMOS PROPERTIES",
        "PROJECT NAME": "LAVANYA COSMOS",
        "REGISTRATION NUMBER": "RP/07/2024/01177"
    },
    {
        "PROMOTER NAME": "Creative Estcon Private Limited",
        "PROJECT NAME": "Creative Harmony",
        "REGISTRATION NUMBER": "RP/19/2023/00995"
    },
    {
        "PROMOTER NAME": "CSS SJ HOMES",
        "PROJECT NAME": "PRISTINE HEIGHTS",
        "REGISTRATION NUMBER": "RP/19/2023/00927"
    },
    {
        "PROMOTER NAME": "DEBAKI INFRATECH PVT LTD.",
        "PROJECT NAME": "DEVKI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/01038"
    },
    {
        "PROMOTER NAME": "Debolina Developers Pvt Ltd",
        "PROJECT NAME": "Sai Sradha Enclave",
        "REGISTRATION NUMBER": "RP/07/2022/00693"
    },
    {
        "PROMOTER NAME": "DEEPTI ENTERPRISER",
        "PROJECT NAME": "DEEPTI TOWER",
        "REGISTRATION NUMBER": "MP/19/2023/01008"
    },
    {
        "PROMOTER NAME": "DHANADEEPA BUILDCON PRIVATE LIMITED",
        "PROJECT NAME": "UB DOMICILE",
        "REGISTRATION NUMBER": "RP/19/2023/00954"
    },
    {
        "PROMOTER NAME": "DHARMA BHOOMI HOMES",
        "PROJECT NAME": "DB ASTORIA",
        "REGISTRATION NUMBER": "RP/19/2023/01062"
    },
    {
        "PROMOTER NAME": "DHIRAJ CONSTRUCTION AND MARKETING PRIVATE LIMITED",
        "PROJECT NAME": "ANANTA SAI ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2024/01098"
    },
    {
        "PROMOTER NAME": "Dhiraj Kumar Choudhury",
        "PROJECT NAME": "Priyadarshini Vatika",
        "REGISTRATION NUMBER": "RP/11/2019/00280"
    },
    {
        "PROMOTER NAME": "Dhiraj Kumar Choudhury",
        "PROJECT NAME": "Priyadarshini Parkview",
        "REGISTRATION NUMBER": "RP/11/2021/00508"
    },
    {
        "PROMOTER NAME": "Dhiraj Kumar Choudhury",
        "PROJECT NAME": "PRIYADARSHINI PARKVIEW PHASE-I",
        "REGISTRATION NUMBER": "RP/11/2022/00815"
    },
    {
        "PROMOTER NAME": "Dhiraj Kumar Choudhury",
        "PROJECT NAME": "PRIYADARSHINI PARKVIEW PHASE-2",
        "REGISTRATION NUMBER": "RP/11/2022/00824"
    },
    {
        "PROMOTER NAME": "Dhiraj Kumar Choudhury",
        "PROJECT NAME": "PRIYADARSHINI PARKVIEW PHASE-III",
        "REGISTRATION NUMBER": "RP/11/2023/00868"
    },
    {
        "PROMOTER NAME": "DISHA BUILDER AND DEVELOPERS",
        "PROJECT NAME": "DISHA AVENUE",
        "REGISTRATION NUMBER": "MP/11/2020/00368"
    },
    {
        "PROMOTER NAME": "DISHA BUILDER AND DEVELOPERS",
        "PROJECT NAME": "DISHA AVENUE",
        "REGISTRATION NUMBER": "MP/11/2022/00749"
    },
    {
        "PROMOTER NAME": "DISHA ESTATE",
        "PROJECT NAME": "DISHA SHANDALYA RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2024/01117"
    },
    {
        "PROMOTER NAME": "DISHA REAL ESTATE",
        "PROJECT NAME": "DISHA RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2022/00745"
    },
    {
        "PROMOTER NAME": "DISHA REAL ESTATE",
        "PROJECT NAME": "Disha Pride",
        "REGISTRATION NUMBER": "RP/11/2023/00990"
    },
    {
        "PROMOTER NAME": "DISHA REAL ESTATE",
        "PROJECT NAME": "Disha Premium",
        "REGISTRATION NUMBER": "RP/11/2023/01049"
    },
    {
        "PROMOTER NAME": "Divyarupa Multi Projects Pvt. Ltd.",
        "PROJECT NAME": "Jingyansha Enclave",
        "REGISTRATION NUMBER": "RP/19/2022/00639"
    },
    {
        "PROMOTER NAME": "DM HOMES",
        "PROJECT NAME": "MAHADEV AVENUE",
        "REGISTRATION NUMBER": "MP/07/2023/00909"
    },
    {
        "PROMOTER NAME": "dream assets private limited",
        "PROJECT NAME": "TAPOVAN",
        "REGISTRATION NUMBER": "RP/19/2023/01055"
    },
    {
        "PROMOTER NAME": "Dushasan Swain",
        "PROJECT NAME": "Bansidhar Swain Housing Project",
        "REGISTRATION NUMBER": "RP/19/2022/00676"
    },
    {
        "PROMOTER NAME": "DWARKA BUILDERS",
        "PROJECT NAME": "MANORAMA ENCLAVE",
        "REGISTRATION NUMBER": "RP/09/2024/01252"
    },
    {
        "PROMOTER NAME": "Ekdanta Infraprojects Private Limited",
        "PROJECT NAME": "EKDANTA GALAXY",
        "REGISTRATION NUMBER": "RP/19/2019/00336"
    },
    {
        "PROMOTER NAME": "Ekdanta Infraprojects Private Limited",
        "PROJECT NAME": "EKDANTA HARMONY",
        "REGISTRATION NUMBER": "RP/19/2022/00751"
    },
    {
        "PROMOTER NAME": "Ekdanta Infraprojects Private Limited",
        "PROJECT NAME": "EKDANTA SIGNATURE",
        "REGISTRATION NUMBER": "RP/19/2022/00775"
    },
    {
        "PROMOTER NAME": "Ekdanta Infraprojects Private Limited",
        "PROJECT NAME": "EKDANTA PARADISE",
        "REGISTRATION NUMBER": "RP/26/2023/00999"
    },
    {
        "PROMOTER NAME": "Ekdanta Infraprojects Private Limited",
        "PROJECT NAME": "EKDANTA IMPERIAL",
        "REGISTRATION NUMBER": "RP/19/2024/01150"
    },
    {
        "PROMOTER NAME": "EMINENZA CREATION PVT.LTD",
        "PROJECT NAME": "EMINENZA ELITE",
        "REGISTRATION NUMBER": "RP/19/2023/00969"
    },
    {
        "PROMOTER NAME": "Emmaar (India) Spaces Private Limited",
        "PROJECT NAME": "Shivgram Residency",
        "REGISTRATION NUMBER": "RP/19/2024/01182"
    },
    {
        "PROMOTER NAME": "ENGINEERING CONSULTANCY & CONSTRUCTION",
        "PROJECT NAME": "ARRIDE PALACE",
        "REGISTRATION NUMBER": "RP/19/2022/00792"
    },
    {
        "PROMOTER NAME": "ENHANCE PROJECTS PVT. LTD.",
        "PROJECT NAME": "SHRI MUKTESHWAR ENCLAVE",
        "REGISTRATION NUMBER": "RP/03/2022/00681"
    },
    {
        "PROMOTER NAME": "Epari Suresh Kumar",
        "PROJECT NAME": "KALINGA ROYALE",
        "REGISTRATION NUMBER": "RP/19/2023/00911"
    },
    {
        "PROMOTER NAME": "ESSEN RG LLP",
        "PROJECT NAME": "Essen Hemanilaya",
        "REGISTRATION NUMBER": "RP/19/2023/00960"
    },
    {
        "PROMOTER NAME": "ETHICS ASSETS PRIVATE LIMITED",
        "PROJECT NAME": "ETHICS AMLAN",
        "REGISTRATION NUMBER": "RP/07/2024/01139"
    },
    {
        "PROMOTER NAME": "FALCON REAL ESTATE PRIVATE LIMITED",
        "PROJECT NAME": "FALCON TATVA",
        "REGISTRATION NUMBER": "RP/19/2023/00922"
    },
    {
        "PROMOTER NAME": "Falcon Real Estate Private Limited",
        "PROJECT NAME": "JSP HARMONY",
        "REGISTRATION NUMBER": "RP/19/2024/01248"
    },
    {
        "PROMOTER NAME": "Fortune Infra Properties Private Limited",
        "PROJECT NAME": "OM PARO NIBAS",
        "REGISTRATION NUMBER": "RP/19/2020/00349"
    },
    {
        "PROMOTER NAME": "Fortune Infra Properties Private Limited",
        "PROJECT NAME": "OM VAIBHAV RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01088"
    },
    {
        "PROMOTER NAME": "Fortune Infra Properties Private Limited",
        "PROJECT NAME": "OM SHIVALIK",
        "REGISTRATION NUMBER": "RP/19/2024/01152"
    },
    {
        "PROMOTER NAME": "Fortune Multriprojects (India) private limited",
        "PROJECT NAME": "CORAL CREST",
        "REGISTRATION NUMBER": "RP/26/2022/00831"
    },
    {
        "PROMOTER NAME": "Gajalaxmi Construction Private Limited",
        "PROJECT NAME": "GAJALAXMI HOMES",
        "REGISTRATION NUMBER": "RP/26/2019/00312"
    },
    {
        "PROMOTER NAME": "Gajalaxmi Construction Private Limited",
        "PROJECT NAME": "GAJALAXMI DREAMS",
        "REGISTRATION NUMBER": "RP/19/2024/01133"
    },
    {
        "PROMOTER NAME": "GALAXY DEVELOPERS",
        "PROJECT NAME": "GALAXY HOMES",
        "REGISTRATION NUMBER": "RP/11/2024/01096"
    },
    {
        "PROMOTER NAME": "Ganapati builders LTD",
        "PROJECT NAME": "Ganapati Palm Meadows",
        "REGISTRATION NUMBER": "RP/04/2022/00752"
    },
    {
        "PROMOTER NAME": "GANGOTRI NILAYAM PRIVATE LIMITED",
        "PROJECT NAME": "SAI CHHAYA",
        "REGISTRATION NUMBER": "RP/26/2024/01156"
    },
    {
        "PROMOTER NAME": "GAYATRI HINDOCHA",
        "PROJECT NAME": "RK VATIKA PHASE-I",
        "REGISTRATION NUMBER": "RP/09/2024/01121"
    },
    {
        "PROMOTER NAME": "GAYATRI HINDOCHA",
        "PROJECT NAME": "RK VATIKA PHASE-II",
        "REGISTRATION NUMBER": "RP/09/2024/01122"
    },
    {
        "PROMOTER NAME": "GAYATRI HINDOCHA",
        "PROJECT NAME": "RK VATIKA PHASE-III",
        "REGISTRATION NUMBER": "RP/09/2024/01127"
    },
    {
        "PROMOTER NAME": "GAYLORDS INFRA PVT LTD",
        "PROJECT NAME": "GAYLORDS ATLANTIS",
        "REGISTRATION NUMBER": "RP/30/2024/01086"
    },
    {
        "PROMOTER NAME": "GB DEVELOPERS",
        "PROJECT NAME": "GB ESTATE",
        "REGISTRATION NUMBER": "RP/07/2024/01206"
    },
    {
        "PROMOTER NAME": "GIRIKUNJ TRADELINK PRIVATE LIMITED",
        "PROJECT NAME": "ANANTH",
        "REGISTRATION NUMBER": "MP/26/2023/00962"
    },
    {
        "PROMOTER NAME": "GK GLOBAL CONTECH",
        "PROJECT NAME": "GOPINATH VILLA",
        "REGISTRATION NUMBER": "RP/26/2022/00683"
    },
    {
        "PROMOTER NAME": "GK GLOBAL CONTECH",
        "PROJECT NAME": "AYUSHPREM ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00726"
    },
    {
        "PROMOTER NAME": "GK PROPERTIES",
        "PROJECT NAME": "LINGARAJ ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/01034"
    },
    {
        "PROMOTER NAME": "GLOR|AA pROJECTS",
        "PROJECT NAME": "GLORIAA ENCLAVE",
        "REGISTRATION NUMBER": "RP/30/2022/00839"
    },
    {
        "PROMOTER NAME": "GRAND BAZAAR DEVELOPERS LLP",
        "PROJECT NAME": "GRAND BAZAAR & AWAAS",
        "REGISTRATION NUMBER": "MP/07/2022/00682"
    },
    {
        "PROMOTER NAME": "GRAND BAZAAR DEVELOPERS LLP",
        "PROJECT NAME": "GRAND BAZAAR & AWAAS",
        "REGISTRATION NUMBER": "MP/07/2024/01132"
    },
    {
        "PROMOTER NAME": "GREEN PARK DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "SUM GREEN",
        "REGISTRATION NUMBER": "RP/19/2024/01228"
    },
    {
        "PROMOTER NAME": "Hari Prasad Agarwal",
        "PROJECT NAME": "ANAND DHAM",
        "REGISTRATION NUMBER": "RP/04/2021/00514"
    },
    {
        "PROMOTER NAME": "HARSHPRIYA NEELACHALA",
        "PROJECT NAME": "HN REGALIA",
        "REGISTRATION NUMBER": "RP/19/2021/00627"
    },
    {
        "PROMOTER NAME": "HARSHPRIYA NEELACHALA",
        "PROJECT NAME": "SOLITAIRE",
        "REGISTRATION NUMBER": "MP/19/2023/00992"
    },
    {
        "PROMOTER NAME": "HARSHPRIYA NEELACHALA",
        "PROJECT NAME": "HN COURTYARD",
        "REGISTRATION NUMBER": "RP/19/2024/01166"
    },
    {
        "PROMOTER NAME": "HEERA VENTURES",
        "PROJECT NAME": "HEERA GD TOWERS",
        "REGISTRATION NUMBER": "RP/28/2022/00730"
    },
    {
        "PROMOTER NAME": "HIGHFIELD HOMES LLP",
        "PROJECT NAME": "PANACEA",
        "REGISTRATION NUMBER": "RP/19/2022/00809"
    },
    {
        "PROMOTER NAME": "HILTON HEIGHTS",
        "PROJECT NAME": "HILTON HEIGHTS PRATHAM",
        "REGISTRATION NUMBER": "RP/11/2024/01195"
    },
    {
        "PROMOTER NAME": "HKP INFRASTRUCTURE PVT.LTD.",
        "PROJECT NAME": "HKP RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/00981"
    },
    {
        "PROMOTER NAME": "HOMELY BUILDOFIY PVT LTD",
        "PROJECT NAME": "GALAXY HEIGHTS",
        "REGISTRATION NUMBER": "MP/04/2022/00709"
    },
    {
        "PROMOTER NAME": "INFINITY INFRADEVELOPERS",
        "PROJECT NAME": "NEERU GREENS",
        "REGISTRATION NUMBER": "MP/02/2023/00872"
    },
    {
        "PROMOTER NAME": "INFINITY INFRADEVELOPERS",
        "PROJECT NAME": "NEERU GREENS",
        "REGISTRATION NUMBER": "MP/02/2023/00904"
    },
    {
        "PROMOTER NAME": "INFOCITY GREENS",
        "PROJECT NAME": "RAJ MANOHAR RESIDENCY II",
        "REGISTRATION NUMBER": "RP/19/2024/01186"
    },
    {
        "PROMOTER NAME": "INFYSON INFRASTRUCTURE PVT. LTD.",
        "PROJECT NAME": "INFYSON PALACE",
        "REGISTRATION NUMBER": "RP/19/2024/01101"
    },
    {
        "PROMOTER NAME": "Integral Homes Private Limited",
        "PROJECT NAME": "SUDEB PREMISES",
        "REGISTRATION NUMBER": "RP/19/2020/00357"
    },
    {
        "PROMOTER NAME": "Intellex Strategic Management Pvt Ltd.",
        "PROJECT NAME": "INTELLEX IMPERIAL CLUB",
        "REGISTRATION NUMBER": "MP/19/2022/00805"
    },
    {
        "PROMOTER NAME": "Intellex Strategic Management Pvt Ltd.",
        "PROJECT NAME": "INTELLEX ECOTOPIA",
        "REGISTRATION NUMBER": "RP/19/2024/01243"
    },
    {
        "PROMOTER NAME": "J N INFRASTRUCTURE PRIVATE LIMITED",
        "PROJECT NAME": "INDRAMANI TOWER",
        "REGISTRATION NUMBER": "RP/19/2023/01005"
    },
    {
        "PROMOTER NAME": "J.J.P INFRASTRUCTURES PRIVATE LIMITED",
        "PROJECT NAME": "NIRMALYA",
        "REGISTRATION NUMBER": "RP/19/2023/01082"
    },
    {
        "PROMOTER NAME": "JAGABANDHU CONSTRUCTION PRIVATE LIMITED",
        "PROJECT NAME": "JAGABANDHU ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00788"
    },
    {
        "PROMOTER NAME": "JAGDAMBA IRON AND STEEL PRIVATE LIMITED",
        "PROJECT NAME": "SHREE GOVIND DHAM RESIDENCY",
        "REGISTRATION NUMBER": "MP/22/2023/01012"
    },
    {
        "PROMOTER NAME": "JAI JAGANNATH GREEN INFRA LLP",
        "PROJECT NAME": "S S ROYAL TOWN",
        "REGISTRATION NUMBER": "RP/04/2023/00850"
    },
    {
        "PROMOTER NAME": "JAI JAGANNATH GREEN INFRA LLP",
        "PROJECT NAME": "S S ROYAL TOWN - PHASE - 2",
        "REGISTRATION NUMBER": "RP/04/2023/00880"
    },
    {
        "PROMOTER NAME": "JAI JAGANNATH GREEN INFRA LLP",
        "PROJECT NAME": "S S ROYAL TOWN - PHASE - 3",
        "REGISTRATION NUMBER": "RP/04/2023/00957"
    },
    {
        "PROMOTER NAME": "Jai Mahakal Properties LLP",
        "PROJECT NAME": "R K VALLEY",
        "REGISTRATION NUMBER": "RP/28/2021/00610"
    },
    {
        "PROMOTER NAME": "Jai Mahakal Properties LLP",
        "PROJECT NAME": "RK VALLEY 1A",
        "REGISTRATION NUMBER": "RP/28/2022/00780"
    },
    {
        "PROMOTER NAME": "JAI MATADI ENGINEERING & CONSTRUCTIONS PRIVATE LIMITED",
        "PROJECT NAME": "NORTHEN PARADISE",
        "REGISTRATION NUMBER": "RP/26/2023/00955"
    },
    {
        "PROMOTER NAME": "JAIN BUILDERS PVT LTD",
        "PROJECT NAME": "JAIN HERITAGE",
        "REGISTRATION NUMBER": "RP/07/2022/00680"
    },
    {
        "PROMOTER NAME": "Jain Builders Pvt.Ltd",
        "PROJECT NAME": "Jain Avenue",
        "REGISTRATION NUMBER": "RP/07/2019/00296"
    },
    {
        "PROMOTER NAME": "Janaki Ballav Pattnaik",
        "PROJECT NAME": "ASHRIBAD ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2020/00353"
    },
    {
        "PROMOTER NAME": "Janaki Ballav Pattnaik",
        "PROJECT NAME": "ASHRIBAD ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00797"
    },
    {
        "PROMOTER NAME": "Jassmin Infradevelopers Pvt. Ltd",
        "PROJECT NAME": "Nilachakra Paradise",
        "REGISTRATION NUMBER": "RP/26/2023/00959"
    },
    {
        "PROMOTER NAME": "JMG LIFESTYLE PRIVATE LIMITED",
        "PROJECT NAME": "JMG SKYPARK",
        "REGISTRATION NUMBER": "RP/07/2022/00656"
    },
    {
        "PROMOTER NAME": "JMUP DEVELOPERS LLP",
        "PROJECT NAME": "KOSHAL VIHAR",
        "REGISTRATION NUMBER": "RP/28/2024/01094"
    },
    {
        "PROMOTER NAME": "JPS INFRATECH PROJECTS PRIVATE LIMITED",
        "PROJECT NAME": "SUN CITY PALACE",
        "REGISTRATION NUMBER": "RP/19/2022/00812"
    },
    {
        "PROMOTER NAME": "JPS INFRATECH PROJECTS PRIVATE LIMITED",
        "PROJECT NAME": "SUN CITY PHASE-2",
        "REGISTRATION NUMBER": "RP/19/2023/01064"
    },
    {
        "PROMOTER NAME": "Kalky Infracon Pvt. Ltd.",
        "PROJECT NAME": "Shubh Aashray",
        "REGISTRATION NUMBER": "RP/19/2022/00638"
    },
    {
        "PROMOTER NAME": "Kalyani Estates & Builders Pvt. Ltd.",
        "PROJECT NAME": "KALYANI VILLA",
        "REGISTRATION NUMBER": "RP/05/2022/00762"
    },
    {
        "PROMOTER NAME": "Kalyani Estates & Builders Pvt. Ltd.",
        "PROJECT NAME": "KALYANI PRESTIGE",
        "REGISTRATION NUMBER": "RP/05/2023/00943"
    },
    {
        "PROMOTER NAME": "Kalyani Residency Smart City",
        "PROJECT NAME": "Kalyani Residency Mahanadi View",
        "REGISTRATION NUMBER": "MP/28/2024/01102"
    },
    {
        "PROMOTER NAME": "Kamdhenu Promoters",
        "PROJECT NAME": "Krishna Avenue",
        "REGISTRATION NUMBER": "RP/19/2023/00936"
    },
    {
        "PROMOTER NAME": "Kamdhenu Promoters",
        "PROJECT NAME": "KRISHNA EDIFICE",
        "REGISTRATION NUMBER": "RP/19/2024/01203"
    },
    {
        "PROMOTER NAME": "Kamdhenu Promoters",
        "PROJECT NAME": "KRISHNA EDIFICE",
        "REGISTRATION NUMBER": "RP/19/2024/01203"
    },
    {
        "PROMOTER NAME": "Kamdhenu Promoters",
        "PROJECT NAME": "KRISHNA EDIFICE",
        "REGISTRATION NUMBER": "RP/19/2024/01203"
    },
    {
        "PROMOTER NAME": "Kamdhenu Promoters",
        "PROJECT NAME": "KRISHNA EDIFICE",
        "REGISTRATION NUMBER": "RP/19/2024/01203"
    },
    {
        "PROMOTER NAME": "Kamdhenu Promoters",
        "PROJECT NAME": "KRISHNA EDIFICE",
        "REGISTRATION NUMBER": "RP/19/2024/01203"
    },
    {
        "PROMOTER NAME": "KAPIS REALTY DEVELOPERS PVT LTD",
        "PROJECT NAME": "SIYARAM",
        "REGISTRATION NUMBER": "RP/19/2022/00787"
    },
    {
        "PROMOTER NAME": "KAPIS REALTY DEVELOPERS PVT LTD",
        "PROJECT NAME": "LOTUS CRYSTAL",
        "REGISTRATION NUMBER": "RP/19/2024/01173"
    },
    {
        "PROMOTER NAME": "KBR BUILDERS AND DEVELOPERS",
        "PROJECT NAME": "KBR SUNSHINE",
        "REGISTRATION NUMBER": "RP/11/2024/01196"
    },
    {
        "PROMOTER NAME": "KMCD Infrastructure Private Limited",
        "PROJECT NAME": "LUXURY LANDING",
        "REGISTRATION NUMBER": "RP/17/2023/00916"
    },
    {
        "PROMOTER NAME": "KNP DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "PARSURAM  BHUMAN",
        "REGISTRATION NUMBER": "RP/11/2022/00821"
    },
    {
        "PROMOTER NAME": "Kokila Infratech Pvt. Ltd",
        "PROJECT NAME": "KOKILA ENCLAVE ANNEX",
        "REGISTRATION NUMBER": "RP/19/2021/00615"
    },
    {
        "PROMOTER NAME": "Kokila Infratech Pvt. Ltd",
        "PROJECT NAME": "KOKILA KANCHAN TOWER",
        "REGISTRATION NUMBER": "MP/19/2023/01028"
    },
    {
        "PROMOTER NAME": "Kokila Infratech Pvt. Ltd",
        "PROJECT NAME": "KOKILA ROYAL GARDEN",
        "REGISTRATION NUMBER": "RP/19/2023/01013"
    },
    {
        "PROMOTER NAME": "KONARK BUILDERS & DEVELOPERS",
        "PROJECT NAME": "WALLFORT ANANDA",
        "REGISTRATION NUMBER": "RP/25/2022/00689"
    },
    {
        "PROMOTER NAME": "KOSHAL BUILDERS PRIVATE LIMITED",
        "PROJECT NAME": "KOSHAL RESIDENCY",
        "REGISTRATION NUMBER": "RP/28/2022/00669"
    },
    {
        "PROMOTER NAME": "Kreation Infratech",
        "PROJECT NAME": "Divine Compassion",
        "REGISTRATION NUMBER": "RP/19/2022/00732"
    },
    {
        "PROMOTER NAME": "Kriday Realty Pvt. Ltd",
        "PROJECT NAME": "Ariana Phase 1 (T1,T2, T3, T4, T10, T11, T12)",
        "REGISTRATION NUMBER": "RP/19/2018/00225"
    },
    {
        "PROMOTER NAME": "Krishna Assets",
        "PROJECT NAME": "VRINDAVAN",
        "REGISTRATION NUMBER": "RP/04/2022/00783"
    },
    {
        "PROMOTER NAME": "KRISHNA PROPERTIES & DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "KRISHNA NOOK",
        "REGISTRATION NUMBER": "RP/19/2023/00874"
    },
    {
        "PROMOTER NAME": "KRISHNA PROPERTIES & DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "KRISHNA CLOUD 9",
        "REGISTRATION NUMBER": "RP/19/2023/00984"
    },
    {
        "PROMOTER NAME": "KRISHNA PROPERTIES & DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "KRISHNA MANOR",
        "REGISTRATION NUMBER": "PS/07/2023/00972"
    },
    {
        "PROMOTER NAME": "KRISHNA PROPERTIES & DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "KRISHNA APOLLINE",
        "REGISTRATION NUMBER": "MP/19/2024/01194"
    },
    {
        "PROMOTER NAME": "KRJ PROJECT PRIVATE LIMITED",
        "PROJECT NAME": "SRI KRISHNA APARTMENT",
        "REGISTRATION NUMBER": "RP/28/2024/01222"
    },
    {
        "PROMOTER NAME": "Krupaluji Constructions Pvt. Ltd",
        "PROJECT NAME": "Kripalu Mansion",
        "REGISTRATION NUMBER": "RP/19/2020/00379"
    },
    {
        "PROMOTER NAME": "Krupaluji Constructions Pvt. Ltd",
        "PROJECT NAME": "KRIPALU INFOCITY",
        "REGISTRATION NUMBER": "RP/19/2023/00952"
    },
    {
        "PROMOTER NAME": "Lambodar Behera",
        "PROJECT NAME": "KRISHNA VIHAR",
        "REGISTRATION NUMBER": "RP/13/2019/00292"
    },
    {
        "PROMOTER NAME": "Lingaraj Infrastructure Private Limited",
        "PROJECT NAME": "LINGARAJ ESTATE",
        "REGISTRATION NUMBER": "RP/26/2024/01237"
    },
    {
        "PROMOTER NAME": "Lingaraj Infrastructure Private Limited",
        "PROJECT NAME": "LINGARAJ ESTATE CELESTIA",
        "REGISTRATION NUMBER": "RP/26/2024/01221"
    },
    {
        "PROMOTER NAME": "LIVINGSTYLE INFRAHOME PRIVATE LIMITED",
        "PROJECT NAME": "OM ANANDA",
        "REGISTRATION NUMBER": "RP/19/2024/01157"
    },
    {
        "PROMOTER NAME": "LOCHANA SWAIN",
        "PROJECT NAME": "PRAHALLAD COMMERCIAL AND LOCHANA RESIDENCY",
        "REGISTRATION NUMBER": "MP/19/2023/01051"
    },
    {
        "PROMOTER NAME": "LOGER DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "LOGER DREAM VILLA",
        "REGISTRATION NUMBER": "RP/19/2023/00847"
    },
    {
        "PROMOTER NAME": "LOGER DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "LOGER SARASWATI GALLERY",
        "REGISTRATION NUMBER": "RP/19/2023/00867"
    },
    {
        "PROMOTER NAME": "LUXNEST PROJECTS PRIVATE LIMITED",
        "PROJECT NAME": "SHREE BHUVAN",
        "REGISTRATION NUMBER": "RP/19/2024/01113"
    },
    {
        "PROMOTER NAME": "M/S 'S' PROMOTERS AND BUILDERS",
        "PROJECT NAME": "Mahalaxmi Tower",
        "REGISTRATION NUMBER": "MP/11/2022/00735"
    },
    {
        "PROMOTER NAME": "M/S ARADHANA PROPERTY DEVELOPMENT PVT. LTD.",
        "PROJECT NAME": "BASUDEV PALACE",
        "REGISTRATION NUMBER": "MP/19/2022/00723"
    },
    {
        "PROMOTER NAME": "M/S BADRIDHAM VILLA'S",
        "PROJECT NAME": "BADRIDHAM VILLA'S",
        "REGISTRATION NUMBER": "RP/25/2022/00666"
    },
    {
        "PROMOTER NAME": "M/S BADRIDHAM VILLA'S",
        "PROJECT NAME": "BADRIDHAM VILLA'S PHASE-2",
        "REGISTRATION NUMBER": "RP/25/2022/00743"
    },
    {
        "PROMOTER NAME": "M/S BASUDEV CONSTRUCTIONS",
        "PROJECT NAME": "BT RESIDENCY P-III",
        "REGISTRATION NUMBER": "RP/19/2023/00893"
    },
    {
        "PROMOTER NAME": "M/S BLISSBELL PROPERTIES",
        "PROJECT NAME": "BLISSBELL ROYAL",
        "REGISTRATION NUMBER": "RP/19/2023/00881"
    },
    {
        "PROMOTER NAME": "M/s Dream Multiple Projects Pvt. Ltd.",
        "PROJECT NAME": "GODABARI ENCLAVE",
        "REGISTRATION NUMBER": "MP/19/2022/00790"
    },
    {
        "PROMOTER NAME": "M/s Empire Estates and Construction",
        "PROJECT NAME": "Param Arvind Bhoomi",
        "REGISTRATION NUMBER": "PS/28/2022/00648"
    },
    {
        "PROMOTER NAME": "M/S Gangotri Developers",
        "PROJECT NAME": "GANGOTRI NIVAS",
        "REGISTRATION NUMBER": "RP/26/2023/00947"
    },
    {
        "PROMOTER NAME": "M/s GD Constructions",
        "PROJECT NAME": "ARKA HEIGHTS",
        "REGISTRATION NUMBER": "RP/11/2024/01095"
    },
    {
        "PROMOTER NAME": "M/s LAXMI INFRA VENTURE PVT.LTD",
        "PROJECT NAME": "LAXMI ANNEX",
        "REGISTRATION NUMBER": "RP/19/2022/00700"
    },
    {
        "PROMOTER NAME": "M/s LAXMI INFRA VENTURE PVT.LTD",
        "PROJECT NAME": "LAXMI IMPERIAL",
        "REGISTRATION NUMBER": "RP/19/2022/00784"
    },
    {
        "PROMOTER NAME": "M/s LAXMI INFRA VENTURE PVT.LTD",
        "PROJECT NAME": "LAXMI ASHIYANA",
        "REGISTRATION NUMBER": "RP/19/2023/00928"
    },
    {
        "PROMOTER NAME": "M/s LAXMI INFRA VENTURE PVT.LTD",
        "PROJECT NAME": "LAXMI RESIDENCY-4",
        "REGISTRATION NUMBER": "RP/19/2024/01109"
    },
    {
        "PROMOTER NAME": "M/s LAXMI INFRA VENTURE PVT.LTD",
        "PROJECT NAME": "LAXMI SWARNA VAIBHAV",
        "REGISTRATION NUMBER": "RP/19/2023/01026"
    },
    {
        "PROMOTER NAME": "M/s LAXMI INFRA VENTURE PVT.LTD",
        "PROJECT NAME": "LAXMI FRESH LIVING",
        "REGISTRATION NUMBER": "MP/07/2023/01067"
    },
    {
        "PROMOTER NAME": "M/s LAXMI INFRA VENTURE PVT.LTD",
        "PROJECT NAME": "LAXMI VAIKUNTHAPURAM",
        "REGISTRATION NUMBER": "RP/19/2024/01130"
    },
    {
        "PROMOTER NAME": "M/s Panchmukhi Constructions",
        "PROJECT NAME": "UMA SARITA",
        "REGISTRATION NUMBER": "RP/19/2024/01134"
    },
    {
        "PROMOTER NAME": "M/S SHAGUN BUILDER",
        "PROJECT NAME": "ROYALE CLASSIC",
        "REGISTRATION NUMBER": "RP/19/2022/00796"
    },
    {
        "PROMOTER NAME": "M/S SHYAM NAYAN VIHAR",
        "PROJECT NAME": "SHYAM NAYAN VIHAR",
        "REGISTRATION NUMBER": "RP/17/2020/00380"
    },
    {
        "PROMOTER NAME": "M/S SIDHA GANESH BUILDER & PROMOTERS",
        "PROJECT NAME": "SIDHA BINAYAK EXECUTIVE",
        "REGISTRATION NUMBER": "RP/26/2022/00706"
    },
    {
        "PROMOTER NAME": "M/S SIDHA GANESH BUILDER & PROMOTERS",
        "PROJECT NAME": "SIDHA BINAYAK EXECUTIVE",
        "REGISTRATION NUMBER": "RP/26/2023/01059"
    },
    {
        "PROMOTER NAME": "M/S Sourya  constructions",
        "PROJECT NAME": "sourya Enclave",
        "REGISTRATION NUMBER": "RP/19/2022/00714"
    },
    {
        "PROMOTER NAME": "M/s Srinivasulu Real Estates & Construction",
        "PROJECT NAME": "GOPU VILLS",
        "REGISTRATION NUMBER": "RP/11/2022/00766"
    },
    {
        "PROMOTER NAME": "M/s.  Ansu Infra Services Pvt. Ltd",
        "PROJECT NAME": "Tulasi Khetra",
        "REGISTRATION NUMBER": "RP/19/2021/00476"
    },
    {
        "PROMOTER NAME": "M/S. AADHAR ESTATES PRIVATE LIMITED",
        "PROJECT NAME": "SUNNY SOUTH CITY",
        "REGISTRATION NUMBER": "MP/19/2021/00524"
    },
    {
        "PROMOTER NAME": "M/S. ACRUX REALCON PVT. LTD.",
        "PROJECT NAME": "ACRUX BASUDEV",
        "REGISTRATION NUMBER": "RP/19/2021/00451"
    },
    {
        "PROMOTER NAME": "M/S. Alltrade Construction Private Limited",
        "PROJECT NAME": "NIDO DE AAMOR",
        "REGISTRATION NUMBER": "RP/19/2022/00785"
    },
    {
        "PROMOTER NAME": "M/S. AMJ GLOBAL HOMES LLP",
        "PROJECT NAME": "UTKAL GREENEX",
        "REGISTRATION NUMBER": "RP/19/2021/00464"
    },
    {
        "PROMOTER NAME": "M/S. AML HOMES",
        "PROJECT NAME": "AML GREENS",
        "REGISTRATION NUMBER": "RP/19/2021/00486"
    },
    {
        "PROMOTER NAME": "M/S. AR DEVELOPERS",
        "PROJECT NAME": "PRASAD TOWER",
        "REGISTRATION NUMBER": "RP/28/2021/00527"
    },
    {
        "PROMOTER NAME": "M/s. Archi Tech Creations",
        "PROJECT NAME": "Lavanya",
        "REGISTRATION NUMBER": "RP/19/2021/00435"
    },
    {
        "PROMOTER NAME": "M/s. Archi Tech Creations",
        "PROJECT NAME": "LAVANYA",
        "REGISTRATION NUMBER": "RP/19/2024/01099"
    },
    {
        "PROMOTER NAME": "M/s. Archid Builders Pvt. Ltd",
        "PROJECT NAME": "Archid Shreekunj",
        "REGISTRATION NUMBER": "RP/19/2021/00446"
    },
    {
        "PROMOTER NAME": "M/s. Archid Builders Pvt. Ltd",
        "PROJECT NAME": "Archid Sailabala",
        "REGISTRATION NUMBER": "RP/19/2021/00501"
    },
    {
        "PROMOTER NAME": "M/s. Archid Builders Pvt. Ltd",
        "PROJECT NAME": "Archid Pramod Retreat",
        "REGISTRATION NUMBER": "RP/19/2021/00619"
    },
    {
        "PROMOTER NAME": "M/s. Archid Builders Pvt. Ltd",
        "PROJECT NAME": "Archid Sailabala",
        "REGISTRATION NUMBER": "RP/19/2022/00748"
    },
    {
        "PROMOTER NAME": "M/s. Archid Builders Pvt. Ltd",
        "PROJECT NAME": "ARCHID ELITE",
        "REGISTRATION NUMBER": "RP/19/2023/00853"
    },
    {
        "PROMOTER NAME": "M/s. Archid Builders Pvt. Ltd",
        "PROJECT NAME": "ARCHID MARY",
        "REGISTRATION NUMBER": "RP/18/2024/01208"
    },
    {
        "PROMOTER NAME": "M/S. ARKESH NARAYAN SINGH DEO",
        "PROJECT NAME": "ROYAL GARDEN",
        "REGISTRATION NUMBER": "RP/02/2021/00425"
    },
    {
        "PROMOTER NAME": "M/S. ARMAAN DEVCON PVT. LTD. (OPC)",
        "PROJECT NAME": "ARMAAN VILLA",
        "REGISTRATION NUMBER": "RP/19/2021/00568"
    },
    {
        "PROMOTER NAME": "M/s. Assotech Sun Growth Abode LLP",
        "PROJECT NAME": "ASSOTECH PRIDE( PHASE 1)",
        "REGISTRATION NUMBER": "MP/19/2020/00394"
    },
    {
        "PROMOTER NAME": "M/s. Assotech Sun Growth Abode LLP",
        "PROJECT NAME": "ASSOTECH PRIDE (PHASE-I)",
        "REGISTRATION NUMBER": "MP/19/2021/00585"
    },
    {
        "PROMOTER NAME": "M/s. Auroshree Constructions Private Limited",
        "PROJECT NAME": "Auro Villa-4",
        "REGISTRATION NUMBER": "RP/19/2021/00538"
    },
    {
        "PROMOTER NAME": "M/s. Auroshree Constructions Private Limited",
        "PROJECT NAME": "AURO HOMES",
        "REGISTRATION NUMBER": "RP/19/2022/00674"
    },
    {
        "PROMOTER NAME": "M/s. Auroshree Constructions Private Limited",
        "PROJECT NAME": "AURO GREENS",
        "REGISTRATION NUMBER": "RP/11/2024/01142"
    },
    {
        "PROMOTER NAME": "M/s. B.N. Developers Pvt. Ltd",
        "PROJECT NAME": "BASANTI LUXURY APARTMENTS",
        "REGISTRATION NUMBER": "RP/17/2021/00584"
    },
    {
        "PROMOTER NAME": "M/s. B.N. Developers Pvt. Ltd",
        "PROJECT NAME": "THE MIDTOWN MANOR",
        "REGISTRATION NUMBER": "RP/19/2023/00892"
    },
    {
        "PROMOTER NAME": "M/S. BALAJI BUILDERS AND DEVELOPERS",
        "PROJECT NAME": "BALAJI AWAS YOJNA",
        "REGISTRATION NUMBER": "RP/28/2021/00465"
    },
    {
        "PROMOTER NAME": "M/S. BALAJI BUILDERS AND DEVELOPERS",
        "PROJECT NAME": "BALAJI BUNGALOWS",
        "REGISTRATION NUMBER": "RP/28/2023/00982"
    },
    {
        "PROMOTER NAME": "M/S. BALAJI BUILDERS AND DEVELOPERS",
        "PROJECT NAME": "BALAJI GREENS PREMIUM",
        "REGISTRATION NUMBER": "RP/28/2023/01035"
    },
    {
        "PROMOTER NAME": "M/S. BALAJI BUILDERS AND DEVELOPERS",
        "PROJECT NAME": "Balaji Awas Premium",
        "REGISTRATION NUMBER": "RP/28/2023/01066"
    },
    {
        "PROMOTER NAME": "M/S. BHAGWATI PROJECTS",
        "PROJECT NAME": "BHAGWATI ELITE",
        "REGISTRATION NUMBER": "RP/30/2019/00251"
    },
    {
        "PROMOTER NAME": "M/S. BHAGWATI PROJECTS",
        "PROJECT NAME": "BHAGWATI VEDAM",
        "REGISTRATION NUMBER": "RP/30/2021/00576"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "Daya Enclave - Proposed Residential Housing Complex at K9-B, Kalinga Nagar, Bhubaneswar",
        "REGISTRATION NUMBER": "RP/19/2021/00456"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "Ekamra Residency - Proposed Residential Complex at Subudhipur, Bhubaneswar",
        "REGISTRATION NUMBER": "RP/19/2021/00454"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "Kharavela Complex - Proposed Commercial cum Residential Complex at K-9A, Kalinga Nagar, Bhubaneswar",
        "REGISTRATION NUMBER": "MP/19/2021/00430"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "Neighborhood Shopping Complex(Commercial) K-6,Subudhipur, Bhubaneswar",
        "REGISTRATION NUMBER": "CP/19/2023/00915"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "Chandrasekharpur Affordable Housing Project",
        "REGISTRATION NUMBER": "RP/19/2023/00968"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "SHANTI NAGAR AWAS YOJNA",
        "REGISTRATION NUMBER": "RP/19/2023/00953"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "Rehabilitation Project of Slum and Informal settlement Centre for EWS Under Housing for all Policy (Affordable Housing)",
        "REGISTRATION NUMBER": "RP/19/2023/00967"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "NILAMADHAB AWAS YOJANA",
        "REGISTRATION NUMBER": "RP/19/2023/00961"
    },
    {
        "PROMOTER NAME": "M/s. Bhubaneswar Development Authority",
        "PROJECT NAME": "Rehabilitation Project Of Slum & Informal Settlement Under Housing for  all Policy For Economically Weaker Section Under PMAY At-Gadakana",
        "REGISTRATION NUMBER": "RP/19/2024/01112"
    },
    {
        "PROMOTER NAME": "M/s. Binayak Condev Pvt. Ltd.",
        "PROJECT NAME": "Binayak Bee Plaza",
        "REGISTRATION NUMBER": "MP/13/2020/00409"
    },
    {
        "PROMOTER NAME": "M/S. BIVAB DEVELOPERS PVT. LTD.",
        "PROJECT NAME": "BIVAB NEST",
        "REGISTRATION NUMBER": "RP/19/2021/00455"
    },
    {
        "PROMOTER NAME": "M/S. BIVAB DEVELOPERS PVT. LTD.",
        "PROJECT NAME": "BIVAB ANSH",
        "REGISTRATION NUMBER": "RP/19/2022/00630"
    },
    {
        "PROMOTER NAME": "M/S. BIXITA PROMOTERS AND DEVELOPERS",
        "PROJECT NAME": "DREAM HORIZONS",
        "REGISTRATION NUMBER": "RP/11/2021/00471"
    },
    {
        "PROMOTER NAME": "M/S. BIXITA PROMOTERS AND DEVELOPERS",
        "PROJECT NAME": "PADMAVATI GARDEN",
        "REGISTRATION NUMBER": "RP/11/2022/00717"
    },
    {
        "PROMOTER NAME": "M/s. Brahma Nanda Dash",
        "PROJECT NAME": "MRUTYUNJAY ENCLAVE",
        "REGISTRATION NUMBER": "RP/18/2020/00391"
    },
    {
        "PROMOTER NAME": "M/s. Brahmani Developers Pvt. Ltd",
        "PROJECT NAME": "OM BRAHMANI SQUARE",
        "REGISTRATION NUMBER": "MP/30/2020/00354"
    },
    {
        "PROMOTER NAME": "M/s. Brahmani Developers Pvt. Ltd",
        "PROJECT NAME": "BRAHMANI PRESTIGE",
        "REGISTRATION NUMBER": "MP/30/2021/00433"
    },
    {
        "PROMOTER NAME": "M/s. Brahmani Developers Pvt. Ltd",
        "PROJECT NAME": "Brahmani Aditya Homes",
        "REGISTRATION NUMBER": "RP/30/2022/00740"
    },
    {
        "PROMOTER NAME": "M/s. Brahmani Developers Pvt. Ltd",
        "PROJECT NAME": "BRAHMANI PRESTIGE",
        "REGISTRATION NUMBER": "MP/30/2023/00852"
    },
    {
        "PROMOTER NAME": "M/s. Brahmani Developers Pvt. Ltd",
        "PROJECT NAME": "BRAHMANI HILLS",
        "REGISTRATION NUMBER": "RP/30/2024/01106"
    },
    {
        "PROMOTER NAME": "M/s. Brahmani Developers Pvt. Ltd",
        "PROJECT NAME": "OM BRAHMANI SQUARE",
        "REGISTRATION NUMBER": "MP/30/2024/01229"
    },
    {
        "PROMOTER NAME": "M/s. Brunda Devi & Sons Private Limited",
        "PROJECT NAME": "Tamala Residency",
        "REGISTRATION NUMBER": "RP/19/2021/00493"
    },
    {
        "PROMOTER NAME": "M/s. Brunda Devi & Sons Private Limited",
        "PROJECT NAME": "PISTA RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01091"
    },
    {
        "PROMOTER NAME": "M/S. CAYANA INFRATECH PVT. LTD",
        "PROJECT NAME": "NILACHAKRA RESIDENCY",
        "REGISTRATION NUMBER": "RP/26/2021/00482"
    },
    {
        "PROMOTER NAME": "M/S. CHHABINDRA KUMAR PRADHAN",
        "PROJECT NAME": "TERRACE TREE",
        "REGISTRATION NUMBER": "RP/19/2021/00572"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Serenity",
        "REGISTRATION NUMBER": "RP/19/2021/00500"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Greenwoods Pristine",
        "REGISTRATION NUMBER": "RP/07/2022/00823"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Royale Vista",
        "REGISTRATION NUMBER": "RP/07/2022/00716"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Greenwoods Pristine",
        "REGISTRATION NUMBER": "RP/07/2022/00657"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Kings Court",
        "REGISTRATION NUMBER": "MP/19/2022/00770"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Kings Court Ph-II",
        "REGISTRATION NUMBER": "RP/19/2022/00841"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Kings Court Ph-IV",
        "REGISTRATION NUMBER": "RP/19/2024/01148"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Kings Court- Ph-III",
        "REGISTRATION NUMBER": "RP/19/2023/00899"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Kings Court Ph - V",
        "REGISTRATION NUMBER": "RP/19/2024/01128"
    },
    {
        "PROMOTER NAME": "M/S. CITY TRADE ARCADE PRIVATE LIMITED",
        "PROJECT NAME": "Metro Kings Court Ph - VI",
        "REGISTRATION NUMBER": "RP/19/2024/01124"
    },
    {
        "PROMOTER NAME": "M/S. CLASSIC PROPERTY DEVELOPER",
        "PROJECT NAME": "QUEEN HILLS VALLEY PHASE- I & II",
        "REGISTRATION NUMBER": "RP/02/2023/00917"
    },
    {
        "PROMOTER NAME": "M/S. COVENANTS DEVELOPERS PVT. LTD",
        "PROJECT NAME": "COVENANTS LA CASA",
        "REGISTRATION NUMBER": "RP/19/2021/00557"
    },
    {
        "PROMOTER NAME": "M/S. COVENANTS DEVELOPERS PVT. LTD",
        "PROJECT NAME": "COVENANTS MI CASA",
        "REGISTRATION NUMBER": "RP/19/2023/00997"
    },
    {
        "PROMOTER NAME": "M/S. COVENANTS DEVELOPERS PVT. LTD",
        "PROJECT NAME": "COVENANTS LA CASA",
        "REGISTRATION NUMBER": "RP/19/2024/01178"
    },
    {
        "PROMOTER NAME": "M/S. DAS CONSTRUCTION",
        "PROJECT NAME": "PRASHANTI",
        "REGISTRATION NUMBER": "RP/19/2021/00583"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL ENCLAVE ONE",
        "REGISTRATION NUMBER": "RP/19/2020/00403"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL PLATINUM",
        "REGISTRATION NUMBER": "RP/19/2021/00483"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL VILLA ONE",
        "REGISTRATION NUMBER": "RP/19/2020/00399"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL SCB Residency",
        "REGISTRATION NUMBER": "RP/19/2021/00443"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL ENCLAVE 5",
        "REGISTRATION NUMBER": "RP/19/2021/00571"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL ENCLAVE 6",
        "REGISTRATION NUMBER": "RP/19/2021/00600"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL ENCLAVE 7",
        "REGISTRATION NUMBER": "RP/19/2021/00614"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL SATYABATA COMPLEX",
        "REGISTRATION NUMBER": "RP/19/2023/00933"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL SCB RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/00948"
    },
    {
        "PROMOTER NAME": "M/S. DEVAVRAT HOMES PVT. LTD",
        "PROJECT NAME": "DHPL SAPPHIRE",
        "REGISTRATION NUMBER": "RP/19/2023/00974"
    },
    {
        "PROMOTER NAME": "M/S. DHARMA INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "DHARMA RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2021/00510"
    },
    {
        "PROMOTER NAME": "M/S. DHARMA INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "DHARMA AALAYAM",
        "REGISTRATION NUMBER": "MP/19/2022/00779"
    },
    {
        "PROMOTER NAME": "M/S. DHARMA INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "DHARMA SUDARSHAN",
        "REGISTRATION NUMBER": "MP/26/2023/01002"
    },
    {
        "PROMOTER NAME": "M/s. Dhrutisova Infratech Pvt. Ltd.",
        "PROJECT NAME": "Dhrutisova Enclave",
        "REGISTRATION NUMBER": "RP/19/2021/00516"
    },
    {
        "PROMOTER NAME": "M/s. Diamond Graphite Industries Pvt. Ltd",
        "PROJECT NAME": "ALISHAN EAST PARK",
        "REGISTRATION NUMBER": "RP/02/2021/00575"
    },
    {
        "PROMOTER NAME": "M/S. DION INFRATECH PRIVATE LIMITED",
        "PROJECT NAME": "DIONS RIVER FRONT PHASE - III",
        "REGISTRATION NUMBER": "RP/07/2021/00417"
    },
    {
        "PROMOTER NAME": "M/s. DN Homes Pvt. Ltd",
        "PROJECT NAME": "DN Pallaciya",
        "REGISTRATION NUMBER": "MP/19/2021/00567"
    },
    {
        "PROMOTER NAME": "M/s. DN Homes Pvt. Ltd",
        "PROJECT NAME": "DN FAIRYTALE EXTENSION",
        "REGISTRATION NUMBER": "MP/19/2022/00734"
    },
    {
        "PROMOTER NAME": "M/s. DN Homes Pvt. Ltd",
        "PROJECT NAME": "DN YOO ODISHA",
        "REGISTRATION NUMBER": "MP/19/2024/01171"
    },
    {
        "PROMOTER NAME": "M/s. DREAMS IMPERATIVE PVT.LTD",
        "PROJECT NAME": "MUDULI HOUSE",
        "REGISTRATION NUMBER": "RP/19/2021/00590"
    },
    {
        "PROMOTER NAME": "M/s. Dwarikamayee Homes Pvt. Ltd",
        "PROJECT NAME": "Dwarika Manson",
        "REGISTRATION NUMBER": "RP/19/2021/00548"
    },
    {
        "PROMOTER NAME": "M/s. Eastern Estate Construction & Developers Pvt. Ltd.",
        "PROJECT NAME": "Diamond City - Cuttack",
        "REGISTRATION NUMBER": "MP/07/2021/00505"
    },
    {
        "PROMOTER NAME": "M/s. Eastern Estate Construction & Developers Pvt. Ltd.",
        "PROJECT NAME": "Diamond City - Cuttack",
        "REGISTRATION NUMBER": "MP/07/2024/01161"
    },
    {
        "PROMOTER NAME": "M/S. ELITE RETAILS",
        "PROJECT NAME": "ELITE SPRING",
        "REGISTRATION NUMBER": "RP/30/2021/00450"
    },
    {
        "PROMOTER NAME": "M/s. Essen Construction",
        "PROJECT NAME": "Ratnakar Residency",
        "REGISTRATION NUMBER": "RP/19/2019/00310"
    },
    {
        "PROMOTER NAME": "M/s. Essen Construction",
        "PROJECT NAME": "Ratnakar Residency",
        "REGISTRATION NUMBER": "RP/19/2021/00552"
    },
    {
        "PROMOTER NAME": "M/s. Essen Construction",
        "PROJECT NAME": "ESSEN KAILASH",
        "REGISTRATION NUMBER": "RP/19/2021/00589"
    },
    {
        "PROMOTER NAME": "M/s. Essen Construction",
        "PROJECT NAME": "RAJ MANOHAR RESIDENCY II",
        "REGISTRATION NUMBER": "RP/19/2022/00781"
    },
    {
        "PROMOTER NAME": "M/s. Essen Construction",
        "PROJECT NAME": "RAJ MANOHAR RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2022/00655"
    },
    {
        "PROMOTER NAME": "M/s. Essen Construction",
        "PROJECT NAME": "ESSEN GB CITY CENTRE",
        "REGISTRATION NUMBER": "MP/04/2023/00875"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "CITY HOMES",
        "REGISTRATION NUMBER": "RP/19/2019/00284"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "BILASINI ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2020/00362"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS EMPIRE",
        "REGISTRATION NUMBER": "RP/19/2020/00406"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "CITY HOMES-PHASE-II",
        "REGISTRATION NUMBER": "RP/19/2021/00477"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "SEA ROSES",
        "REGISTRATION NUMBER": "RP/26/2021/00530"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "GAYATRI PARADISE",
        "REGISTRATION NUMBER": "RP/19/2021/00595"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2022/00632"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "SRICHANDAN ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00746"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS OPAL",
        "REGISTRATION NUMBER": "RP/19/2022/00705"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "NIRVANA",
        "REGISTRATION NUMBER": "RP/19/2022/00707"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "CITY HOMES",
        "REGISTRATION NUMBER": "RP/19/2022/00804"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS GALAXY",
        "REGISTRATION NUMBER": "RP/19/2023/00865"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "Evos Avante Phase -I",
        "REGISTRATION NUMBER": "RP/19/2023/00942"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS ANANDIKA",
        "REGISTRATION NUMBER": "RP/26/2023/00980"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS ALCHEMY",
        "REGISTRATION NUMBER": "RP/19/2023/01077"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS AMANI",
        "REGISTRATION NUMBER": "RP/19/2024/01184"
    },
    {
        "PROMOTER NAME": "M/s. Evos Buildcon Private Limited",
        "PROJECT NAME": "EVOS ATMAN",
        "REGISTRATION NUMBER": "RP/19/2024/01241"
    },
    {
        "PROMOTER NAME": "M/S. FALCON REAL ESTATE PVT. LTD",
        "PROJECT NAME": "FALCON CREST",
        "REGISTRATION NUMBER": "RP/19/2021/00581"
    },
    {
        "PROMOTER NAME": "M/s. FRONTLINE HOME CREATION PVT. LTD.",
        "PROJECT NAME": "FRONT HOME HORIZON",
        "REGISTRATION NUMBER": "RP/19/2020/00386"
    },
    {
        "PROMOTER NAME": "M/s. FRONTLINE HOME CREATION PVT. LTD.",
        "PROJECT NAME": "FRONT HOME ELITE",
        "REGISTRATION NUMBER": "RP/19/2022/00671"
    },
    {
        "PROMOTER NAME": "M/s. Ganapati Multicomplex Pvt. Ltd",
        "PROJECT NAME": "Ganapati Enclave",
        "REGISTRATION NUMBER": "RP/19/2021/00596"
    },
    {
        "PROMOTER NAME": "M/s. GK Developer",
        "PROJECT NAME": "KALPATARU HEAVEN",
        "REGISTRATION NUMBER": "RP/19/2021/00432"
    },
    {
        "PROMOTER NAME": "M/s. GK Developer",
        "PROJECT NAME": "NM HEIGHTS",
        "REGISTRATION NUMBER": "RP/19/2022/00791"
    },
    {
        "PROMOTER NAME": "M/S. GRAND BAZAAR DEVELOPERS LLP.",
        "PROJECT NAME": "GRAND BAZAAR & AWAAS",
        "REGISTRATION NUMBER": "MP/07/2021/00578"
    },
    {
        "PROMOTER NAME": "M/s. Grandmark Developers Pvt. Ltd",
        "PROJECT NAME": "GRANDMARK EXOTICA-5",
        "REGISTRATION NUMBER": "RP/19/2019/00308"
    },
    {
        "PROMOTER NAME": "M/s. Grandmark Developers Pvt. Ltd",
        "PROJECT NAME": "SHIVANAND GRANDMARK",
        "REGISTRATION NUMBER": "RP/19/2020/00405"
    },
    {
        "PROMOTER NAME": "M/s. Harshpriya Constructions Pvt. Ltd.",
        "PROJECT NAME": "HP SQUARE",
        "REGISTRATION NUMBER": "MP/19/2022/00691"
    },
    {
        "PROMOTER NAME": "M/s. Harshpriya Constructions Pvt. Ltd.",
        "PROJECT NAME": "RN SIGNATURE",
        "REGISTRATION NUMBER": "RP/19/2023/00877"
    },
    {
        "PROMOTER NAME": "M/s. Harshpriya Constructions Pvt. Ltd.",
        "PROJECT NAME": "HP SQUARE",
        "REGISTRATION NUMBER": "MP/19/2023/00951"
    },
    {
        "PROMOTER NAME": "M/s. Harshpriya Constructions Pvt. Ltd.",
        "PROJECT NAME": "31 FOREST PARK",
        "REGISTRATION NUMBER": "RP/19/2024/01223"
    },
    {
        "PROMOTER NAME": "M/S. HIGH FIELD PROPERTIES PVT. LTD.",
        "PROJECT NAME": "CRIMSON",
        "REGISTRATION NUMBER": "RP/19/2023/01003"
    },
    {
        "PROMOTER NAME": "M/s. Ibnul Hasan",
        "PROJECT NAME": "Centurion Enclave (Phase-I)",
        "REGISTRATION NUMBER": "RP/18/2021/00424"
    },
    {
        "PROMOTER NAME": "M/s. Ibnul Hasan",
        "PROJECT NAME": "Centurion Enclave (Phase-II)",
        "REGISTRATION NUMBER": "RP/18/2021/00535"
    },
    {
        "PROMOTER NAME": "M/s. Isalicare Estates and Health Pvt. Ltd.",
        "PROJECT NAME": "ISALI TOWER",
        "REGISTRATION NUMBER": "RP/11/2022/00759"
    },
    {
        "PROMOTER NAME": "M/s. Jagdish Infraheights Pvt. Ltd",
        "PROJECT NAME": "Jagdish Bhawan",
        "REGISTRATION NUMBER": "RP/19/2021/00422"
    },
    {
        "PROMOTER NAME": "M/s. Jagdish Infraheights Pvt. Ltd",
        "PROJECT NAME": "JAGADISH RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2021/00617"
    },
    {
        "PROMOTER NAME": "M/s. Jagdish Infraheights Pvt. Ltd",
        "PROJECT NAME": "Jagdish Homes",
        "REGISTRATION NUMBER": "RP/19/2022/00720"
    },
    {
        "PROMOTER NAME": "M/s. Jagdish Infraheights Pvt. Ltd",
        "PROJECT NAME": "Jagdish Bhawan",
        "REGISTRATION NUMBER": "RP/19/2024/01135"
    },
    {
        "PROMOTER NAME": "M/S. JAGYNASENI INFRAPROJECTS PRIVATE LIMITED",
        "PROJECT NAME": "JAGYNASENI APARTMENT-1",
        "REGISTRATION NUMBER": "RP/03/2021/00499"
    },
    {
        "PROMOTER NAME": "M/S. JAJATI DEVELOPERS AND INFRASTRUCTURE PVT.LTD",
        "PROJECT NAME": "MJ TOWER",
        "REGISTRATION NUMBER": "RP/19/2021/00468"
    },
    {
        "PROMOTER NAME": "M/S. JAJATI DEVELOPERS AND INFRASTRUCTURE PVT.LTD",
        "PROJECT NAME": "MJ HOLIDAY HOME",
        "REGISTRATION NUMBER": "RP/26/2023/00866"
    },
    {
        "PROMOTER NAME": "M/s. Jasodhara Infrasecurity Pvt. Ltd",
        "PROJECT NAME": "JASODHARA AWAS",
        "REGISTRATION NUMBER": "RP/11/2021/00423"
    },
    {
        "PROMOTER NAME": "M/s. Jasodhara Infrasecurity Pvt. Ltd",
        "PROJECT NAME": "Jasodhara Classic",
        "REGISTRATION NUMBER": "RP/11/2023/00920"
    },
    {
        "PROMOTER NAME": "M/S. JAY JAGANNATHSWAMI INFRAPROJECTS PVT. LTD.",
        "PROJECT NAME": "JAY JAGANNATH AVENUE",
        "REGISTRATION NUMBER": "RP/19/2021/00452"
    },
    {
        "PROMOTER NAME": "M/S. JB ASSETS PRIVATE LIMITED",
        "PROJECT NAME": "JB AB ELYSIUM",
        "REGISTRATION NUMBER": "RP/19/2019/00252"
    },
    {
        "PROMOTER NAME": "M/S. JB ASSETS PRIVATE LIMITED",
        "PROJECT NAME": "JB PARK VIEW",
        "REGISTRATION NUMBER": "RP/19/2021/00592"
    },
    {
        "PROMOTER NAME": "M/S. JB ASSETS PRIVATE LIMITED",
        "PROJECT NAME": "JB PARK VIEW-II",
        "REGISTRATION NUMBER": "RP/19/2021/00582"
    },
    {
        "PROMOTER NAME": "M/S. JB ASSETS PRIVATE LIMITED",
        "PROJECT NAME": "JB ESTELLA",
        "REGISTRATION NUMBER": "RP/19/2023/00944"
    },
    {
        "PROMOTER NAME": "M/S. JB ASSETS PRIVATE LIMITED",
        "PROJECT NAME": "JB POLARIS",
        "REGISTRATION NUMBER": "RP/19/2023/01030"
    },
    {
        "PROMOTER NAME": "M/s. Jena Brothers infrastructure Pvt. Ltd.",
        "PROJECT NAME": "JB Garden",
        "REGISTRATION NUMBER": "RP/19/2021/00533"
    },
    {
        "PROMOTER NAME": "M/S. JJ MUKTESVARA CONSTRUCTION PVT. LTD",
        "PROJECT NAME": "JAGANNATH RAJVIHAAN",
        "REGISTRATION NUMBER": "RP/19/2021/00488"
    },
    {
        "PROMOTER NAME": "M/s. K.D Infratech Pvt. Ltd",
        "PROJECT NAME": "K D residency",
        "REGISTRATION NUMBER": "RP/09/2021/00481"
    },
    {
        "PROMOTER NAME": "M/s. kamalakanta Tripathy-MM Engineers & Consultants",
        "PROJECT NAME": "MM KAMALA TOWER",
        "REGISTRATION NUMBER": "MP/07/2020/00375"
    },
    {
        "PROMOTER NAME": "M/s. kamalakanta Tripathy-MM Engineers & Consultants",
        "PROJECT NAME": "\"MM KAMALA TOWER\"",
        "REGISTRATION NUMBER": "MP/07/2022/00727"
    },
    {
        "PROMOTER NAME": "M/S. KHUSHI REALCON Pvt. Ltd",
        "PROJECT NAME": "KHUSHI SANJEEVANI",
        "REGISTRATION NUMBER": "RP/19/2021/00597"
    },
    {
        "PROMOTER NAME": "M/S. KHUSHI REALCON Pvt. Ltd",
        "PROJECT NAME": "KHUSHI ALTAIR",
        "REGISTRATION NUMBER": "MP/19/2022/00647"
    },
    {
        "PROMOTER NAME": "M/S. KHUSHI REALCON Pvt. Ltd",
        "PROJECT NAME": "KHUSHI CAPELLA (PHASE- I)",
        "REGISTRATION NUMBER": "RP/19/2022/00731"
    },
    {
        "PROMOTER NAME": "M/S. LIFESTYLE PROPERTIES PVT. LTD",
        "PROJECT NAME": "KISHORE LIFESTYLE",
        "REGISTRATION NUMBER": "RP/19/2021/00421"
    },
    {
        "PROMOTER NAME": "M/S. LIFESTYLE PROPERTIES PVT. LTD",
        "PROJECT NAME": "LIFESTYLE GALAXIA",
        "REGISTRATION NUMBER": "MP/19/2021/00449"
    },
    {
        "PROMOTER NAME": "M/S. LIFESTYLE PROPERTIES PVT. LTD",
        "PROJECT NAME": "LIFESTYLE SPRING",
        "REGISTRATION NUMBER": "RP/19/2021/00559"
    },
    {
        "PROMOTER NAME": "M/S. LIFESTYLE PROPERTIES PVT. LTD",
        "PROJECT NAME": "PRAMILA LIFESTYLE",
        "REGISTRATION NUMBER": "RP/19/2022/00704"
    },
    {
        "PROMOTER NAME": "M/S. LIFESTYLE PROPERTIES PVT. LTD",
        "PROJECT NAME": "PRAMILA LIFESTYLE",
        "REGISTRATION NUMBER": "RP/19/2022/00828"
    },
    {
        "PROMOTER NAME": "M/S. MAA SANTOSHI ENGINEERS PVT. LTD",
        "PROJECT NAME": "GALAXY ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2021/00541"
    },
    {
        "PROMOTER NAME": "M/S. MAA SANTOSHI ENGINEERS PVT. LTD",
        "PROJECT NAME": "SHANTI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2021/00542"
    },
    {
        "PROMOTER NAME": "M/S. MAA SANTOSHI ENGINEERS PVT. LTD",
        "PROJECT NAME": "GALAXY ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/00910"
    },
    {
        "PROMOTER NAME": "M/S. MAA SANTOSHI ENGINEERS PVT. LTD",
        "PROJECT NAME": "SHANTI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/00914"
    },
    {
        "PROMOTER NAME": "M/S. MAHADEV REAL ESTATE CONSULTANCY PVT. LTD.",
        "PROJECT NAME": "MAHADEVA AVENUE",
        "REGISTRATION NUMBER": "RP/07/2021/00461"
    },
    {
        "PROMOTER NAME": "M/S. MAHADEV REAL ESTATE CONSULTANCY PVT. LTD.",
        "PROJECT NAME": "MAHADEV ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/00851"
    },
    {
        "PROMOTER NAME": "M/s. Mahanagar Homes",
        "PROJECT NAME": "Godabari Gomati Palace",
        "REGISTRATION NUMBER": "RP/19/2021/00438"
    },
    {
        "PROMOTER NAME": "M/S. MAHAPATRA REALTORS",
        "PROJECT NAME": "MAHAPATRA REALTORS",
        "REGISTRATION NUMBER": "RP/11/2020/00374"
    },
    {
        "PROMOTER NAME": "M/S. MAHI DEVELOPERS",
        "PROJECT NAME": "Royal Palm Sea-View Residency",
        "REGISTRATION NUMBER": "RP/11/2024/01190"
    },
    {
        "PROMOTER NAME": "M/S. MANDAKINI RESORTS PVT. LTD",
        "PROJECT NAME": "MANDAKINI RESORTS",
        "REGISTRATION NUMBER": "RP/07/2021/00485"
    },
    {
        "PROMOTER NAME": "M/S. MANDAKINI RESORTS PVT. LTD",
        "PROJECT NAME": "MANDAKINI RESORTS APARTMENT",
        "REGISTRATION NUMBER": "RP/07/2022/00769"
    },
    {
        "PROMOTER NAME": "M/S. MAPP CONSTRUCTION LLP",
        "PROJECT NAME": "Padmanava Enclave",
        "REGISTRATION NUMBER": "RP/07/2021/00473"
    },
    {
        "PROMOTER NAME": "M/s. Mason Estate (India) Pvt. Ltd",
        "PROJECT NAME": "Mason Paradise Phase-I",
        "REGISTRATION NUMBER": "RP/19/2021/00487"
    },
    {
        "PROMOTER NAME": "M/s. Mason Estate (India) Pvt. Ltd",
        "PROJECT NAME": "MASON LUXURIA",
        "REGISTRATION NUMBER": "RP/19/2022/00695"
    },
    {
        "PROMOTER NAME": "M/s. Mason Estate (India) Pvt. Ltd",
        "PROJECT NAME": "MASON AVENUE",
        "REGISTRATION NUMBER": "RP/19/2023/00919"
    },
    {
        "PROMOTER NAME": "M/s. Mason Estate (India) Pvt. Ltd",
        "PROJECT NAME": "MASON PARADISE PHASE - 2",
        "REGISTRATION NUMBER": "RP/19/2024/01116"
    },
    {
        "PROMOTER NAME": "M/s. Mega Builders & Developers",
        "PROJECT NAME": "Aadya Palace",
        "REGISTRATION NUMBER": "RP/19/2019/00314"
    },
    {
        "PROMOTER NAME": "M/s. Mega Builders & Developers",
        "PROJECT NAME": "SIGNATURE ARCADE",
        "REGISTRATION NUMBER": "RP/19/2021/00503"
    },
    {
        "PROMOTER NAME": "M/s. Mega Builders & Developers",
        "PROJECT NAME": "AADYA PALACE, BLOCK-C",
        "REGISTRATION NUMBER": "RP/19/2021/00588"
    },
    {
        "PROMOTER NAME": "M/s. Mega Builders & Developers",
        "PROJECT NAME": "AADYA PALACE BLOCK B",
        "REGISTRATION NUMBER": "RP/19/2022/00633"
    },
    {
        "PROMOTER NAME": "M/s. Mega Builders & Developers",
        "PROJECT NAME": "SIGNETURE PLAZA",
        "REGISTRATION NUMBER": "RP/19/2023/00986"
    },
    {
        "PROMOTER NAME": "M/S. METRO GARDEN ESTATE PVT. LTD",
        "PROJECT NAME": "Metro Uday",
        "REGISTRATION NUMBER": "RP/07/2021/00469"
    },
    {
        "PROMOTER NAME": "M/S. METRO GARDEN ESTATE PVT. LTD",
        "PROJECT NAME": "Metro 100 acres-Ananta",
        "REGISTRATION NUMBER": "RP/19/2021/00415"
    },
    {
        "PROMOTER NAME": "M/s. MJ Vidya Developers",
        "PROJECT NAME": "MJ Icon",
        "REGISTRATION NUMBER": "RP/19/2021/00431"
    },
    {
        "PROMOTER NAME": "M/S. MM ENGINEERS & CONSULTANTS",
        "PROJECT NAME": "MM RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2020/00377"
    },
    {
        "PROMOTER NAME": "M/S. MM ENGINEERS & CONSULTANTS",
        "PROJECT NAME": "\"MM PARADISE\"",
        "REGISTRATION NUMBER": "RP/07/2021/00444"
    },
    {
        "PROMOTER NAME": "M/S. MM ENGINEERS & CONSULTANTS",
        "PROJECT NAME": "\"MM MENAKA TOWER\"",
        "REGISTRATION NUMBER": "RP/07/2022/00838"
    },
    {
        "PROMOTER NAME": "M/S. MM ENGINEERS & CONSULTANTS",
        "PROJECT NAME": "\"MM BASANTA VATIKA\"",
        "REGISTRATION NUMBER": "RP/26/2023/00891"
    },
    {
        "PROMOTER NAME": "M/S. MM ENGINEERS & CONSULTANTS",
        "PROJECT NAME": "MM BRUNDABANA TOWER",
        "REGISTRATION NUMBER": "MP/07/2024/01214"
    },
    {
        "PROMOTER NAME": "M/s. Mukta Homes Pvt. Ltd",
        "PROJECT NAME": "Iswar Niwas",
        "REGISTRATION NUMBER": "RP/19/2021/00558"
    },
    {
        "PROMOTER NAME": "M/s. Mukta Homes Pvt. Ltd",
        "PROJECT NAME": "Baikunth Villa",
        "REGISTRATION NUMBER": "RP/19/2023/00977"
    },
    {
        "PROMOTER NAME": "M/S. MYSPACE HOMES PVT. LTD",
        "PROJECT NAME": "MYSPACE AURELIA",
        "REGISTRATION NUMBER": "RP/19/2021/00420"
    },
    {
        "PROMOTER NAME": "M/S. MYSPACE HOMES PVT. LTD",
        "PROJECT NAME": "MYSPACE AMANTRAN",
        "REGISTRATION NUMBER": "RP/19/2022/00643"
    },
    {
        "PROMOTER NAME": "M/s. NARULA HOMES",
        "PROJECT NAME": "Aurovilla",
        "REGISTRATION NUMBER": "RP/19/2019/00302"
    },
    {
        "PROMOTER NAME": "M/s. NBER Developers LLP",
        "PROJECT NAME": "Neeladri Ark",
        "REGISTRATION NUMBER": "RP/19/2021/00523"
    },
    {
        "PROMOTER NAME": "M/s. NBER Developers LLP",
        "PROJECT NAME": "NEELADRI ARK, PHASE-II",
        "REGISTRATION NUMBER": "RP/19/2021/00603"
    },
    {
        "PROMOTER NAME": "M/s. NBER Developers LLP",
        "PROJECT NAME": "NEELADRI ARK",
        "REGISTRATION NUMBER": "RP/19/2024/01233"
    },
    {
        "PROMOTER NAME": "M/s. NBER Developers LLP",
        "PROJECT NAME": "NEELADRI ARK PHASE-II",
        "REGISTRATION NUMBER": "RP/19/2024/01215"
    },
    {
        "PROMOTER NAME": "M/S. NEELACHAL BUILDERS PVT. LTD.",
        "PROJECT NAME": "Neelachal Hemalata",
        "REGISTRATION NUMBER": "RP/19/2021/00445"
    },
    {
        "PROMOTER NAME": "M/S. NEELACHAL BUILDERS PVT. LTD.",
        "PROJECT NAME": "NEELACHAL GREENFIELDS",
        "REGISTRATION NUMBER": "RP/19/2021/00569"
    },
    {
        "PROMOTER NAME": "M/S. NEELACHAL INFRA DEVELOPERS PVT. LTD",
        "PROJECT NAME": "Basanti Enclave",
        "REGISTRATION NUMBER": "RP/01/2021/00577"
    },
    {
        "PROMOTER NAME": "M/s. Neelachala Homes and Commercials Pvt. Ltd.",
        "PROJECT NAME": "NEELACHALA IMPERIAL",
        "REGISTRATION NUMBER": "RP/19/2021/00463"
    },
    {
        "PROMOTER NAME": "M/s. Neelachala Homes and Commercials Pvt. Ltd.",
        "PROJECT NAME": "NEELACHALA IMPERIAL",
        "REGISTRATION NUMBER": "RP/19/2022/00837"
    },
    {
        "PROMOTER NAME": "M/s. NEELAMADHAB CONCTRUCTION PRIVATE LIMITED",
        "PROJECT NAME": "SHREERAM HOMES",
        "REGISTRATION NUMBER": "RP/19/2021/00612"
    },
    {
        "PROMOTER NAME": "M/S. NITASHA ESTATE MANAGEMENT PVT. LTD.",
        "PROJECT NAME": "NITASHA URBANIA, PHASE I",
        "REGISTRATION NUMBER": "RP/19/2021/00517"
    },
    {
        "PROMOTER NAME": "M/S. NITASHA ESTATE MANAGEMENT PVT. LTD.",
        "PROJECT NAME": "NITASHA URBANIA, PHASE II",
        "REGISTRATION NUMBER": "RP/19/2023/01004"
    },
    {
        "PROMOTER NAME": "M/S. O2 HEIGHTS",
        "PROJECT NAME": "O2 HEIGHTS",
        "REGISTRATION NUMBER": "RP/11/2021/00573"
    },
    {
        "PROMOTER NAME": "M/S. O2 HEIGHTS",
        "PROJECT NAME": "O2 ORCHID",
        "REGISTRATION NUMBER": "RP/11/2024/01131"
    },
    {
        "PROMOTER NAME": "M/S. ODEON REALTOR PVT. LTD.",
        "PROJECT NAME": "SUNDAR MEADOWS",
        "REGISTRATION NUMBER": "RP/19/2021/00570"
    },
    {
        "PROMOTER NAME": "M/S. ODEON REALTOR PVT. LTD.",
        "PROJECT NAME": "SUNDAR MEADOWS",
        "REGISTRATION NUMBER": "RP/19/2023/00898"
    },
    {
        "PROMOTER NAME": "M/s. Oditech Properties Private Limited",
        "PROJECT NAME": "Oditech Moon",
        "REGISTRATION NUMBER": "RP/19/2022/00675"
    },
    {
        "PROMOTER NAME": "M/s. Oditech Properties Private Limited",
        "PROJECT NAME": "Oditech Aura",
        "REGISTRATION NUMBER": "RP/19/2022/00692"
    },
    {
        "PROMOTER NAME": "M/s. Oditech Properties Private Limited",
        "PROJECT NAME": "Oditech Cute",
        "REGISTRATION NUMBER": "RP/19/2021/00513"
    },
    {
        "PROMOTER NAME": "M/s. Oditech Properties Private Limited",
        "PROJECT NAME": "Oditech Sunshine",
        "REGISTRATION NUMBER": "RP/19/2022/00807"
    },
    {
        "PROMOTER NAME": "M/S. OMM CONTECH PVT. LTD",
        "PROJECT NAME": "BHARAT VILLA PREMIUM",
        "REGISTRATION NUMBER": "RP/19/2020/00410"
    },
    {
        "PROMOTER NAME": "M/S. OMM CONTECH PVT. LTD",
        "PROJECT NAME": "HEMALATA MANSION II",
        "REGISTRATION NUMBER": "RP/19/2024/01180"
    },
    {
        "PROMOTER NAME": "M/S. OMM SHREE DEVELOPER",
        "PROJECT NAME": "SHREE LAXMI NIWAS",
        "REGISTRATION NUMBER": "RP/11/2021/00546"
    },
    {
        "PROMOTER NAME": "M/S. OMM SHREE DEVELOPER",
        "PROJECT NAME": "SHREE LAXMI NIWAS",
        "REGISTRATION NUMBER": "RP/11/2023/01074"
    },
    {
        "PROMOTER NAME": "M/S. ORISSA TWIN CITY BUILDER PVT. LTD",
        "PROJECT NAME": "ROYAL HOMES",
        "REGISTRATION NUMBER": "RP/07/2021/00549"
    },
    {
        "PROMOTER NAME": "M/S. ORO INFRACON PVT. LTD",
        "PROJECT NAME": "ORO EMIRATES",
        "REGISTRATION NUMBER": "RP/19/2021/00515"
    },
    {
        "PROMOTER NAME": "M/S. ORO INFRACON PVT. LTD",
        "PROJECT NAME": "ORO PALM",
        "REGISTRATION NUMBER": "RP/19/2022/00684"
    },
    {
        "PROMOTER NAME": "M/S. ORO INFRACON PVT. LTD",
        "PROJECT NAME": "ORO NIRUPAMA HEIGHTS",
        "REGISTRATION NUMBER": "RP/03/2024/01185"
    },
    {
        "PROMOTER NAME": "M/S. OU INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "9 BOULEVARD",
        "REGISTRATION NUMBER": "RP/19/2021/00574"
    },
    {
        "PROMOTER NAME": "M/s. Panchajanya Infra",
        "PROJECT NAME": "Panchajanya Enclave",
        "REGISTRATION NUMBER": "RP/19/2024/01163"
    },
    {
        "PROMOTER NAME": "M/s. Panda Infratech Limited",
        "PROJECT NAME": "GATIKRUSHNA GREEN",
        "REGISTRATION NUMBER": "RP/19/2021/00525"
    },
    {
        "PROMOTER NAME": "M/s. Panda Infratech Limited",
        "PROJECT NAME": "JIVA",
        "REGISTRATION NUMBER": "RP/19/2023/00976"
    },
    {
        "PROMOTER NAME": "M/s. Panda Infratech Limited",
        "PROJECT NAME": "JIVA 3",
        "REGISTRATION NUMBER": "RP/19/2024/01247"
    },
    {
        "PROMOTER NAME": "M/S. PARAMITRA SMART INFRA SNA PVT. LTD.",
        "PROJECT NAME": "SAMVYAS",
        "REGISTRATION NUMBER": "MP/19/2020/00390"
    },
    {
        "PROMOTER NAME": "M/S. PARAMITRA SMART INFRA SNA PVT. LTD.",
        "PROJECT NAME": "DN KINGSLAND",
        "REGISTRATION NUMBER": "MP/19/2022/00813"
    },
    {
        "PROMOTER NAME": "M/S. PARAMITRA SMART INFRA SNA PVT. LTD.",
        "PROJECT NAME": "DN KINGSLAND",
        "REGISTRATION NUMBER": "MP/19/2023/01042"
    },
    {
        "PROMOTER NAME": "M/S. PARTHA SARATHI ESTATES PRIVATE LIMITED",
        "PROJECT NAME": "SAI SARATHI ENCLAVE",
        "REGISTRATION NUMBER": "RP/27/2021/00428"
    },
    {
        "PROMOTER NAME": "M/s. PDN Developers",
        "PROJECT NAME": "NIRVAN",
        "REGISTRATION NUMBER": "RP/19/2020/00401"
    },
    {
        "PROMOTER NAME": "M/s. PDN Developers",
        "PROJECT NAME": "PDN BISHNU",
        "REGISTRATION NUMBER": "RP/19/2021/00593"
    },
    {
        "PROMOTER NAME": "M/S. PREETAM INFRASTRUCTURE PVT. LTD",
        "PROJECT NAME": "SOMU RESIDENCY PHASE-II",
        "REGISTRATION NUMBER": "RP/19/2021/00545"
    },
    {
        "PROMOTER NAME": "M/S. PREETAM INFRASTRUCTURE PVT. LTD",
        "PROJECT NAME": "SOMU RESIDENCY PHASE-I",
        "REGISTRATION NUMBER": "RP/19/2024/01164"
    },
    {
        "PROMOTER NAME": "M/S. PREETAM INFRASTRUCTURE PVT. LTD",
        "PROJECT NAME": "SOMU RESIDENCY PHASE-IV",
        "REGISTRATION NUMBER": "RP/19/2024/01176"
    },
    {
        "PROMOTER NAME": "M/s. Radhamohan Developers Private Limited",
        "PROJECT NAME": "Radhamohana Villa",
        "REGISTRATION NUMBER": "RP/19/2020/00404"
    },
    {
        "PROMOTER NAME": "M/S. RADHESHYAM SANJAY KUMAR & SONS",
        "PROJECT NAME": "ROYAL HERITAGE",
        "REGISTRATION NUMBER": "MP/02/2021/00512"
    },
    {
        "PROMOTER NAME": "M/S. RAJA RANI HOMES PVT.LTD.",
        "PROJECT NAME": "RAJA RANI DREAM HOMES",
        "REGISTRATION NUMBER": "RP/11/2021/00462"
    },
    {
        "PROMOTER NAME": "M/S. RAJA RANI HOMES PVT.LTD.",
        "PROJECT NAME": "RAJA RANI DREAM HOMES",
        "REGISTRATION NUMBER": "RP/11/2022/00645"
    },
    {
        "PROMOTER NAME": "M/S. RAJA RANI HOMES PVT.LTD.",
        "PROJECT NAME": "RAJA RANI DELIGHT HOMES",
        "REGISTRATION NUMBER": "RP/11/2022/00688"
    },
    {
        "PROMOTER NAME": "M/S. RAJA RANI HOMES PVT.LTD.",
        "PROJECT NAME": "RAJA RANI ROYAL HOMES",
        "REGISTRATION NUMBER": "RP/11/2023/00900"
    },
    {
        "PROMOTER NAME": "M/S. RAJA RANI HOMES PVT.LTD.",
        "PROJECT NAME": "RAJA RANI GREEN VALLEY",
        "REGISTRATION NUMBER": "RP/11/2023/00902"
    },
    {
        "PROMOTER NAME": "M/S. RAJWADI DEVELOPERS PVT. LTD.",
        "PROJECT NAME": "RAJNIVAS",
        "REGISTRATION NUMBER": "RP/19/2020/00395"
    },
    {
        "PROMOTER NAME": "M/S. River Front Developers Private Limited",
        "PROJECT NAME": "DEVELOPMENT OF AFFORDABLE HOUSING PROJECT UNDER MODEL III OF HOUSING FOR ALL POLICY OF GOVERNMENT OF ODISHA (EWS)",
        "REGISTRATION NUMBER": "RP/07/2022/00738"
    },
    {
        "PROMOTER NAME": "M/S. River Front Developers Private Limited",
        "PROJECT NAME": "DIONS TWIN TOWERS",
        "REGISTRATION NUMBER": "MP/07/2022/00685"
    },
    {
        "PROMOTER NAME": "M/S. River Front Developers Private Limited",
        "PROJECT NAME": "DEVELOPMENT OF AFFORDABLE HOUSING PROJECT UNDER MODEL III OF HOUSING FOR ALL POLICY OF GOVERNMENT OF ODISHA (LIG BLOCK - I)",
        "REGISTRATION NUMBER": "RP/07/2022/00736"
    },
    {
        "PROMOTER NAME": "M/S. River Front Developers Private Limited",
        "PROJECT NAME": "DEVELOPMENT OF AFFORDABLE HOUSING PROJECT UNDER MODEL III OF HOUSING FOR ALL POLICY OF GOVERNMENT OF ODISHA (LIG BLOCK - II)",
        "REGISTRATION NUMBER": "RP/07/2022/00737"
    },
    {
        "PROMOTER NAME": "M/S. River Front Developers Private Limited",
        "PROJECT NAME": "Dion's Sky Walk",
        "REGISTRATION NUMBER": "MP/07/2022/00767"
    },
    {
        "PROMOTER NAME": "M/s. RQM Realcon Private Limited",
        "PROJECT NAME": "MR Enclave",
        "REGISTRATION NUMBER": "RP/19/2021/00434"
    },
    {
        "PROMOTER NAME": "M/s. RQM Realcon Private Limited",
        "PROJECT NAME": "MR Enclave",
        "REGISTRATION NUMBER": "RP/19/2022/00701"
    },
    {
        "PROMOTER NAME": "M/S. RSS CREACTIOS PVT. LTD",
        "PROJECT NAME": "DAKSHYA GRIHA",
        "REGISTRATION NUMBER": "RP/07/2021/00470"
    },
    {
        "PROMOTER NAME": "M/s. Rudrakshya Infraprojects Pvt. Ltd.",
        "PROJECT NAME": "Rudrakshya River View",
        "REGISTRATION NUMBER": "RP/19/2021/00413"
    },
    {
        "PROMOTER NAME": "M/S. S.B CONSULTANCY & CONSTRUCTION PVT. LTD",
        "PROJECT NAME": "SOUTH GATE AVENUE",
        "REGISTRATION NUMBER": "RP/19/2021/00607"
    },
    {
        "PROMOTER NAME": "M/s. sadc Estates & Promoters Pvt. Ltd.",
        "PROJECT NAME": "KAUSHIK",
        "REGISTRATION NUMBER": "RP/30/2020/00392"
    },
    {
        "PROMOTER NAME": "M/s. sadc Estates & Promoters Pvt. Ltd.",
        "PROJECT NAME": "KANHUPRIYA",
        "REGISTRATION NUMBER": "RP/19/2022/00739"
    },
    {
        "PROMOTER NAME": "M/S. SAFAL CONSTRUCTION PVT. LTD.",
        "PROJECT NAME": "MALIKA PLAZA",
        "REGISTRATION NUMBER": "RP/19/2021/00480"
    },
    {
        "PROMOTER NAME": "M/s. Sai Raj Homes",
        "PROJECT NAME": "Sri Maa Enclave",
        "REGISTRATION NUMBER": "RP/19/2020/00389"
    },
    {
        "PROMOTER NAME": "M/s. Sai Raj Homes",
        "PROJECT NAME": "NIGAM HEIGHTS",
        "REGISTRATION NUMBER": "RP/19/2021/00537"
    },
    {
        "PROMOTER NAME": "M/s. Sai Raj Homes",
        "PROJECT NAME": "SRI SAI ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00771"
    },
    {
        "PROMOTER NAME": "M/s. Sai Shyam Construction",
        "PROJECT NAME": "Sai Sayam Residency",
        "REGISTRATION NUMBER": "RP/11/2021/00531"
    },
    {
        "PROMOTER NAME": "M/S. SAI SUVAM CONSTRUCTION",
        "PROJECT NAME": "SRI SAI NIVAS",
        "REGISTRATION NUMBER": "RP/13/2021/00478"
    },
    {
        "PROMOTER NAME": "M/S. SAI SUVAM CONSTRUCTION",
        "PROJECT NAME": "Sai Sivam Habitation",
        "REGISTRATION NUMBER": "RP/03/2022/00724"
    },
    {
        "PROMOTER NAME": "M/S. SAPTAGIRI CONSTRUCTION",
        "PROJECT NAME": "OM SHREE RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2021/00460"
    },
    {
        "PROMOTER NAME": "M/S. SAPTAGIRI CONSTRUCTION",
        "PROJECT NAME": "OM SHREE RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2022/00845"
    },
    {
        "PROMOTER NAME": "M/S. SATYAM SIVAM DEVELOPERS",
        "PROJECT NAME": "SIVAM ENCLAVE",
        "REGISTRATION NUMBER": "RP/11/2020/00396"
    },
    {
        "PROMOTER NAME": "M/S. SATYAM SIVAM DEVELOPERS",
        "PROJECT NAME": "SIVAM ENCLAVE",
        "REGISTRATION NUMBER": "RP/11/2022/00774"
    },
    {
        "PROMOTER NAME": "M/s. SBT Properties & Infrastructure Pvt. Ltd.",
        "PROJECT NAME": "BALAJI ENCLAVE (BLOCK-A)",
        "REGISTRATION NUMBER": "RP/19/2021/00532"
    },
    {
        "PROMOTER NAME": "M/s. Shab Infracon Pvt. Ltd.",
        "PROJECT NAME": "ADITYAA CITY PHASE 1",
        "REGISTRATION NUMBER": "RP/19/2020/00408"
    },
    {
        "PROMOTER NAME": "M/S. SHEETAL REAL ESTATE PVT. LTD",
        "PROJECT NAME": "SHEETAL CITY CENTER",
        "REGISTRATION NUMBER": "MP/01/2021/00519"
    },
    {
        "PROMOTER NAME": "M/S. SHEETAL REAL ESTATE PVT. LTD",
        "PROJECT NAME": "SHEETAL CITY CENTER",
        "REGISTRATION NUMBER": "MP/01/2023/00926"
    },
    {
        "PROMOTER NAME": "M/S. SHREE GAJANAN BUILDERS",
        "PROJECT NAME": "SILVER SANDS",
        "REGISTRATION NUMBER": "RP/22/2021/00521"
    },
    {
        "PROMOTER NAME": "M/S. SHREE GAJANAN BUILDERS",
        "PROJECT NAME": "Narayan Enclave",
        "REGISTRATION NUMBER": "MP/22/2024/01111"
    },
    {
        "PROMOTER NAME": "M/S. SHREE GAJANAN BUILDERS",
        "PROJECT NAME": "Vinayak Towers",
        "REGISTRATION NUMBER": "RP/22/2024/01162"
    },
    {
        "PROMOTER NAME": "M/s. Shree Ganesh Buildcon Pvt. Ltd",
        "PROJECT NAME": "9 Arcadia",
        "REGISTRATION NUMBER": "RP/19/2021/00411"
    },
    {
        "PROMOTER NAME": "M/s. Shree Ganesh Buildcon Pvt. Ltd",
        "PROJECT NAME": "Rashmi Lifestyle",
        "REGISTRATION NUMBER": "RP/19/2021/00436"
    },
    {
        "PROMOTER NAME": "M/s. Shree Ganesh Buildcon Pvt. Ltd",
        "PROJECT NAME": "9 Arcadia",
        "REGISTRATION NUMBER": "RP/19/2021/00591"
    },
    {
        "PROMOTER NAME": "M/s. Shree Ganesh Buildcon Pvt. Ltd",
        "PROJECT NAME": "Rashmi Lifestyle",
        "REGISTRATION NUMBER": "RP/19/2021/00594"
    },
    {
        "PROMOTER NAME": "M/s. Shree Ganesh Developers",
        "PROJECT NAME": "Shree Vihar",
        "REGISTRATION NUMBER": "RP/19/2021/00412"
    },
    {
        "PROMOTER NAME": "M/s. Shree Ganesh Developers",
        "PROJECT NAME": "CITY PLAZA",
        "REGISTRATION NUMBER": "CP/19/2024/01175"
    },
    {
        "PROMOTER NAME": "M/s. Shree Gopal Krishna Gosala",
        "PROJECT NAME": "GOPAL KRISHNA RESIDENCY",
        "REGISTRATION NUMBER": "RP/07/2021/00511"
    },
    {
        "PROMOTER NAME": "M/S. SHREE SHIVA DREAM HOME LLP",
        "PROJECT NAME": "ANANDAM NAGAR",
        "REGISTRATION NUMBER": "RP/28/2022/00778"
    },
    {
        "PROMOTER NAME": "M/s. Shri Jagannath Sarchis Infrastructure Pvt. Ltd",
        "PROJECT NAME": "Jagannath Gayatri",
        "REGISTRATION NUMBER": "RP/19/2021/00534"
    },
    {
        "PROMOTER NAME": "M/s. Shri Jagannath Sarchis Infrastructure Pvt. Ltd",
        "PROJECT NAME": "GARUDA STAMBHA",
        "REGISTRATION NUMBER": "RP/19/2022/00782"
    },
    {
        "PROMOTER NAME": "M/s. Shri Jagannath Sarchis Infrastructure Pvt. Ltd",
        "PROJECT NAME": "Jagannath Gayatri",
        "REGISTRATION NUMBER": "RP/19/2023/01040"
    },
    {
        "PROMOTER NAME": "M/s. Shri Jagannath Sarchis Infrastructure Pvt. Ltd",
        "PROJECT NAME": "TulasiBrundaban",
        "REGISTRATION NUMBER": "RP/19/2024/01218"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "ENEM HAUS",
        "REGISTRATION NUMBER": "RP/19/2021/00429"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "Harmony Homes",
        "REGISTRATION NUMBER": "RP/19/2022/00660"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "Lila Residency",
        "REGISTRATION NUMBER": "RP/19/2021/00539"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "Garden View",
        "REGISTRATION NUMBER": "RP/19/2022/00659"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "HOTA ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00760"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "SHUVAM TOWERS",
        "REGISTRATION NUMBER": "MP/19/2022/00744"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "ENEM HAUS",
        "REGISTRATION NUMBER": "RP/19/2022/00757"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "SHUVAM MEADOWS",
        "REGISTRATION NUMBER": "RP/19/2023/01018"
    },
    {
        "PROMOTER NAME": "M/s. Shuvam Construction Pvt. Ltd",
        "PROJECT NAME": "SHUVAM AVENUE",
        "REGISTRATION NUMBER": "RP/19/2024/01114"
    },
    {
        "PROMOTER NAME": "M/S. SHYAMCHAND BUILDERS PRIVATE LIMITED",
        "PROJECT NAME": "UDYAYEEN",
        "REGISTRATION NUMBER": "RP/19/2021/00529"
    },
    {
        "PROMOTER NAME": "M/s. Sidhivinayak Infrastructure& Developers Pvt. Ltd.",
        "PROJECT NAME": "VARUNIKA",
        "REGISTRATION NUMBER": "RP/19/2021/00543"
    },
    {
        "PROMOTER NAME": "M/s. Sidhivinayak Infrastructure& Developers Pvt. Ltd.",
        "PROJECT NAME": "SIDHIVINAYAK SOLARIS",
        "REGISTRATION NUMBER": "RP/19/2023/00935"
    },
    {
        "PROMOTER NAME": "M/s. Sidhivinayak Infrastructure& Developers Pvt. Ltd.",
        "PROJECT NAME": "VARUNIKA",
        "REGISTRATION NUMBER": "RP/19/2023/01024"
    },
    {
        "PROMOTER NAME": "M/s. Silkcity Promoters Private Limited",
        "PROJECT NAME": "Silkcity Enclave",
        "REGISTRATION NUMBER": "RP/11/2020/00381"
    },
    {
        "PROMOTER NAME": "M/s. Sitaram Agrawal",
        "PROJECT NAME": "BARSANA RESIDENCY",
        "REGISTRATION NUMBER": "RP/28/2021/00426"
    },
    {
        "PROMOTER NAME": "M/s. SJ Developers & Housing Pvt. Ltd.",
        "PROJECT NAME": "Royal S K Mansion",
        "REGISTRATION NUMBER": "RP/19/2021/00437"
    },
    {
        "PROMOTER NAME": "M/s. SJ Developers & Housing Pvt. Ltd.",
        "PROJECT NAME": "ROYAL HABITAT",
        "REGISTRATION NUMBER": "MP/19/2022/00753"
    },
    {
        "PROMOTER NAME": "M/S. SJ JRG VENTURES LLP",
        "PROJECT NAME": "ROYAL ATLANTIS",
        "REGISTRATION NUMBER": "RP/26/2022/00650"
    },
    {
        "PROMOTER NAME": "M/S. SKD INFRASTRUCTURE PVT. LTD",
        "PROJECT NAME": "Muktinath Residency",
        "REGISTRATION NUMBER": "RP/19/2021/00498"
    },
    {
        "PROMOTER NAME": "M/S. SKYIES INFRAHOME(OPC) PVT. LTD.",
        "PROJECT NAME": "Swarna Bhumi",
        "REGISTRATION NUMBER": "RP/19/2021/00472"
    },
    {
        "PROMOTER NAME": "M/S. SKYIES INFRAHOME(OPC) PVT. LTD.",
        "PROJECT NAME": "SWARNA BHUMI PHASE-II",
        "REGISTRATION NUMBER": "RP/19/2024/01108"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "SKYTECH TRIVIKRAM AVENUE",
        "REGISTRATION NUMBER": "RP/19/2019/00338"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "SKYTECH INFINITY PHASE II",
        "REGISTRATION NUMBER": "RP/19/2021/00599"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "SKYTECH INFINITY PHASE III",
        "REGISTRATION NUMBER": "RP/19/2021/00606"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "Skytech Icon",
        "REGISTRATION NUMBER": "RP/19/2021/00427"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "SKYTECH INFINITY PHASE IV",
        "REGISTRATION NUMBER": "RP/19/2022/00793"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "SKYTECH INFINITY PHASE-V",
        "REGISTRATION NUMBER": "RP/19/2023/01058"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "SKYTECH ASTHA",
        "REGISTRATION NUMBER": "RP/19/2023/01010"
    },
    {
        "PROMOTER NAME": "M/S. SKYTECH INFRAPROJECTS PVT. LTD",
        "PROJECT NAME": "SKYTECH INFINITY PHASE-VI",
        "REGISTRATION NUMBER": "RP/19/2024/01192"
    },
    {
        "PROMOTER NAME": "M/s. SPACESCOPE DEVELOPERS",
        "PROJECT NAME": "MAA RESIDENCY",
        "REGISTRATION NUMBER": "RP/03/2019/00332"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "Spectrum Jyoti Enclave",
        "REGISTRATION NUMBER": "RP/11/2019/00301"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "Spectrum Royale-II",
        "REGISTRATION NUMBER": "RP/11/2020/00398"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "Spectrum Trendz",
        "REGISTRATION NUMBER": "MP/11/2021/00459"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "SPECTRUM PRINCE",
        "REGISTRATION NUMBER": "MP/11/2021/00457"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "SPECTRUM VANTAGE",
        "REGISTRATION NUMBER": "RP/11/2021/00507"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "Spectrum Jyoti Mall",
        "REGISTRATION NUMBER": "CP/11/2023/00905"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "Spectrum Royale-II",
        "REGISTRATION NUMBER": "RP/11/2022/00808"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "Spectrum Square",
        "REGISTRATION NUMBER": "CP/11/2023/01076"
    },
    {
        "PROMOTER NAME": "M/s. Spectrum Properties",
        "PROJECT NAME": "Spectrum Govind Prime",
        "REGISTRATION NUMBER": "RP/11/2024/01154"
    },
    {
        "PROMOTER NAME": "M/s. SPRINGVILLE GREENS LLP",
        "PROJECT NAME": "Springville Greens Phase-I",
        "REGISTRATION NUMBER": "RP/19/2021/00467"
    },
    {
        "PROMOTER NAME": "M/s. SPRINGVILLE GREENS LLP",
        "PROJECT NAME": "SPRINGVILLE GREENS LLP PHASE II",
        "REGISTRATION NUMBER": "MP/19/2022/00794"
    },
    {
        "PROMOTER NAME": "M/s. SR Constructions and Developers",
        "PROJECT NAME": "DEOMALI HEIGHTS",
        "REGISTRATION NUMBER": "RP/20/2020/00369"
    },
    {
        "PROMOTER NAME": "M/s. Sri Bhulaxmi Infratech LLP",
        "PROJECT NAME": "Sai Raghunath Avenue",
        "REGISTRATION NUMBER": "RP/19/2021/00502"
    },
    {
        "PROMOTER NAME": "M/s. Sri Bhulaxmi Infratech LLP",
        "PROJECT NAME": "SAI NIRMALYA",
        "REGISTRATION NUMBER": "RP/19/2021/00495"
    },
    {
        "PROMOTER NAME": "M/s. Sri Bhulaxmi Infratech LLP",
        "PROJECT NAME": "SAI NIRMALYA",
        "REGISTRATION NUMBER": "RP/19/2022/00755"
    },
    {
        "PROMOTER NAME": "M/s. Sri Bhulaxmi Infratech LLP",
        "PROJECT NAME": "SAI BIJAYALAXMI",
        "REGISTRATION NUMBER": "RP/19/2024/01147"
    },
    {
        "PROMOTER NAME": "M/S. SRI JAGANNATH CONSTRUCTION PVT. LTD",
        "PROJECT NAME": "SRI JAGANNATH PARADISE",
        "REGISTRATION NUMBER": "RP/19/2021/00447"
    },
    {
        "PROMOTER NAME": "M/S. SRI JAGANNATH CONSTRUCTION PVT. LTD",
        "PROJECT NAME": "RADHA KRUSHNA NILAYA",
        "REGISTRATION NUMBER": "RP/19/2023/01039"
    },
    {
        "PROMOTER NAME": "M/s. Sri Jagannath Promoters & Builders Pvt. Ltd",
        "PROJECT NAME": "Ashray-Vihar",
        "REGISTRATION NUMBER": "RP/19/2021/00561"
    },
    {
        "PROMOTER NAME": "M/s. Sri Jagannath Promoters & Builders Pvt. Ltd",
        "PROJECT NAME": "ASHRAY VIHAR-PHASE-II",
        "REGISTRATION NUMBER": "RP/19/2024/01143"
    },
    {
        "PROMOTER NAME": "M/s. Sri Jagannath Promoters & Builders Pvt. Ltd",
        "PROJECT NAME": "SHREE SOOBHA",
        "REGISTRATION NUMBER": "RP/19/2023/00991"
    },
    {
        "PROMOTER NAME": "M/s. Sri Jagannath Promoters & Builders Pvt. Ltd",
        "PROJECT NAME": "SOOBHA MANSION",
        "REGISTRATION NUMBER": "RP/19/2023/01006"
    },
    {
        "PROMOTER NAME": "M/S. SRI KRISHNA ESTATES AND CONSTRUCTION PVT. LTD.",
        "PROJECT NAME": "KRISHNA LAKSHMI ARCADE",
        "REGISTRATION NUMBER": "RP/19/2021/00550"
    },
    {
        "PROMOTER NAME": "M/s. Sriyam Buildtech Pvt. Ltd.",
        "PROJECT NAME": "SRIYAM THE CREST BLOCK  3",
        "REGISTRATION NUMBER": "RP/19/2021/00453"
    },
    {
        "PROMOTER NAME": "M/s. Sriyam Buildtech Pvt. Ltd.",
        "PROJECT NAME": "THE CREST ANNEX",
        "REGISTRATION NUMBER": "RP/19/2023/00931"
    },
    {
        "PROMOTER NAME": "M/s. Srusti Estates Pvt. Ltd",
        "PROJECT NAME": "Srusti Signature",
        "REGISTRATION NUMBER": "RP/19/2021/00418"
    },
    {
        "PROMOTER NAME": "M/s. Srusti Estates Pvt. Ltd",
        "PROJECT NAME": "Srusti Signature",
        "REGISTRATION NUMBER": "RP/19/2023/00862"
    },
    {
        "PROMOTER NAME": "M/s. Srusti Estates Pvt. Ltd",
        "PROJECT NAME": "SHREE SAI COMPLEX",
        "REGISTRATION NUMBER": "RP/19/2024/01144"
    },
    {
        "PROMOTER NAME": "M/s. Srusti Estates Pvt. Ltd",
        "PROJECT NAME": "SRUSTI PLAZA NX",
        "REGISTRATION NUMBER": "RP/19/2024/01167"
    },
    {
        "PROMOTER NAME": "M/s. Stairway Developers Pvt. Ltd",
        "PROJECT NAME": "OM TARA Residency",
        "REGISTRATION NUMBER": "RP/19/2019/00329"
    },
    {
        "PROMOTER NAME": "M/s. Stairway Developers Pvt. Ltd",
        "PROJECT NAME": "STAIRWAY OM DELIGHT",
        "REGISTRATION NUMBER": "RP/19/2021/00560"
    },
    {
        "PROMOTER NAME": "M/s. Stairway Developers Pvt. Ltd",
        "PROJECT NAME": "STAIRWAY OM KUTIRA",
        "REGISTRATION NUMBER": "RP/19/2023/00998"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART VIEW",
        "REGISTRATION NUMBER": "RP/19/2019/00295"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART PALACE",
        "REGISTRATION NUMBER": "RP/19/2019/00313"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART CARE",
        "REGISTRATION NUMBER": "RP/19/2020/00384"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART HOME",
        "REGISTRATION NUMBER": "RP/19/2020/00393"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART HEIGHT",
        "REGISTRATION NUMBER": "MP/19/2021/00504"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART PREMIUM",
        "REGISTRATION NUMBER": "RP/19/2021/00562"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART COMPLEX",
        "REGISTRATION NUMBER": "MP/19/2021/00547"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART HEIGHT",
        "REGISTRATION NUMBER": "MP/19/2022/00798"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART PRIDE",
        "REGISTRATION NUMBER": "MP/19/2023/00883"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART PRATIMA NIWAS",
        "REGISTRATION NUMBER": "RP/19/2024/01145"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART SKYCITY",
        "REGISTRATION NUMBER": "MP/19/2023/00906"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART SHREE",
        "REGISTRATION NUMBER": "RP/19/2023/00939"
    },
    {
        "PROMOTER NAME": "M/s. Stalwart Projects Private Limited",
        "PROJECT NAME": "STALWART LABANYA COMPLEX",
        "REGISTRATION NUMBER": "MP/19/2024/01216"
    },
    {
        "PROMOTER NAME": "M/s. Sublime Homes4all Pvt Ltd",
        "PROJECT NAME": "OASIS",
        "REGISTRATION NUMBER": "RP/11/2022/00802"
    },
    {
        "PROMOTER NAME": "M/s. Sudhansu Sekhar Panigrahy",
        "PROJECT NAME": "Govinda Niwas",
        "REGISTRATION NUMBER": "MP/11/2021/00579"
    },
    {
        "PROMOTER NAME": "M/s. Suman Construction",
        "PROJECT NAME": "SUMAN BATI COMPLEX",
        "REGISTRATION NUMBER": "RP/19/2021/00414"
    },
    {
        "PROMOTER NAME": "M/s. Suman Construction",
        "PROJECT NAME": "SUMAN HOMES",
        "REGISTRATION NUMBER": "RP/19/2021/00554"
    },
    {
        "PROMOTER NAME": "M/s. Sumeet Enterprises",
        "PROJECT NAME": "Sambedana Enclave-II",
        "REGISTRATION NUMBER": "MP/03/2021/00475"
    },
    {
        "PROMOTER NAME": "M/s. Sumeet Enterprises",
        "PROJECT NAME": "SAMBEDANA HEIGHTS",
        "REGISTRATION NUMBER": "RP/03/2024/01085"
    },
    {
        "PROMOTER NAME": "M/s. Sumeet Enterprises",
        "PROJECT NAME": "SAMBEDANA -ENCLAVE-II (BLOCK-D)",
        "REGISTRATION NUMBER": "RP/03/2024/01141"
    },
    {
        "PROMOTER NAME": "M/s. SUN ASSETS",
        "PROJECT NAME": "SUN DHANVANTRI",
        "REGISTRATION NUMBER": "RP/11/2024/01219"
    },
    {
        "PROMOTER NAME": "M/s. Surekha Builders & Developers Pvt. Ltd",
        "PROJECT NAME": "Surekha Orchid",
        "REGISTRATION NUMBER": "RP/19/2020/00402"
    },
    {
        "PROMOTER NAME": "M/s. Surekha Builders & Developers Pvt. Ltd",
        "PROJECT NAME": "SUREKHA MANTHAN",
        "REGISTRATION NUMBER": "RP/19/2023/00886"
    },
    {
        "PROMOTER NAME": "M/S. SWAMI INFRAVENTURES PVT. LTD",
        "PROJECT NAME": "shreeram Residency",
        "REGISTRATION NUMBER": "RP/26/2020/00387"
    },
    {
        "PROMOTER NAME": "M/S. SWAMI INFRAVENTURES PVT. LTD",
        "PROJECT NAME": "THE CAPITAL-1",
        "REGISTRATION NUMBER": "CP/19/2021/00522"
    },
    {
        "PROMOTER NAME": "M/S. SWAMI INFRAVENTURES PVT. LTD",
        "PROJECT NAME": "shreeram Residency",
        "REGISTRATION NUMBER": "RP/26/2021/00618"
    },
    {
        "PROMOTER NAME": "M/S. SYNERGY PROPERTIES AND DEVELOPERS",
        "PROJECT NAME": "PARADISE VILLA",
        "REGISTRATION NUMBER": "RP/19/2021/00442"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "NIRMALYA",
        "REGISTRATION NUMBER": "RP/19/2020/00347"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "ANANTALAYA",
        "REGISTRATION NUMBER": "RP/19/2021/00458"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "CHANDRALOK",
        "REGISTRATION NUMBER": "RP/19/2022/00690"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "DEBANJALI MANSION",
        "REGISTRATION NUMBER": "RP/19/2023/00896"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "URBAN VILLE",
        "REGISTRATION NUMBER": "RP/19/2023/00921"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "TM'S ADHARSILA",
        "REGISTRATION NUMBER": "RP/19/2023/00979"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "CHINTAMANI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/01070"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "TM'S GOURI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01174"
    },
    {
        "PROMOTER NAME": "M/s. T.M Constructions",
        "PROJECT NAME": "TM'S BASAVLATA",
        "REGISTRATION NUMBER": "RP/19/2024/01199"
    },
    {
        "PROMOTER NAME": "M/S. TANAYA PROMOTORS",
        "PROJECT NAME": "SANGITA RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2021/00484"
    },
    {
        "PROMOTER NAME": "M/s. The Welcome Homes",
        "PROJECT NAME": "The Welcome Homes",
        "REGISTRATION NUMBER": "RP/28/2022/00721"
    },
    {
        "PROMOTER NAME": "M/s. The Welcome Homes",
        "PROJECT NAME": "The Welcome Homes",
        "REGISTRATION NUMBER": "RP/28/2023/01079"
    },
    {
        "PROMOTER NAME": "M/s. TIRUMALA INFRASTRUCTURE AND DEVELOPMENT PVT. LTD",
        "PROJECT NAME": "LAVANYA SAMBALPUR",
        "REGISTRATION NUMBER": "RP/28/2021/00416"
    },
    {
        "PROMOTER NAME": "M/s. Top Heritage Pvt. Ltd.",
        "PROJECT NAME": "SWARNA BHOOMI",
        "REGISTRATION NUMBER": "RP/28/2021/00419"
    },
    {
        "PROMOTER NAME": "M/s. Top Heritage Pvt. Ltd.",
        "PROJECT NAME": "SWARNA BHOOMI PHASE-II",
        "REGISTRATION NUMBER": "RP/28/2021/00490"
    },
    {
        "PROMOTER NAME": "M/s. Top Heritage Pvt. Ltd.",
        "PROJECT NAME": "SWARNA BHOOMI PHASE-II",
        "REGISTRATION NUMBER": "RP/28/2022/00827"
    },
    {
        "PROMOTER NAME": "M/s. Touch Wood Infraproject Pvt. Ltd.",
        "PROJECT NAME": "Tennis Court",
        "REGISTRATION NUMBER": "RP/19/2020/00407"
    },
    {
        "PROMOTER NAME": "M/s. Trident Properties Private Limited",
        "PROJECT NAME": "TRIDENT GALAXY III",
        "REGISTRATION NUMBER": "RP/19/2021/00496"
    },
    {
        "PROMOTER NAME": "M/s. Trident Properties Private Limited",
        "PROJECT NAME": "Trident Galaxy III",
        "REGISTRATION NUMBER": "RP/19/2023/01029"
    },
    {
        "PROMOTER NAME": "M/s. Trinity Green Estates LLP",
        "PROJECT NAME": "TRINITY KALINGA",
        "REGISTRATION NUMBER": "RP/19/2021/00439"
    },
    {
        "PROMOTER NAME": "M/s. Trinity Green Estates LLP",
        "PROJECT NAME": "Trinity Crystal",
        "REGISTRATION NUMBER": "RP/19/2021/00580"
    },
    {
        "PROMOTER NAME": "M/s. Trinity Green Estates LLP",
        "PROJECT NAME": "TRINITY PEARL",
        "REGISTRATION NUMBER": "RP/19/2022/00761"
    },
    {
        "PROMOTER NAME": "M/s. Trishakti Promoters & Builders Pvt. Ltd",
        "PROJECT NAME": "Vaishno Greens",
        "REGISTRATION NUMBER": "RP/19/2020/00397"
    },
    {
        "PROMOTER NAME": "M/s. Trishakti Promoters & Builders Pvt. Ltd",
        "PROJECT NAME": "VAISHNO SAI SAROVAR LILLY",
        "REGISTRATION NUMBER": "RP/19/2023/00882"
    },
    {
        "PROMOTER NAME": "M/s. Uditi Dwellings Private Limited",
        "PROJECT NAME": "Ashiana Regal",
        "REGISTRATION NUMBER": "RP/19/2021/00551"
    },
    {
        "PROMOTER NAME": "M/s. Umaparvati Construction Pvt. Ltd.",
        "PROJECT NAME": "Jagannath Enclave",
        "REGISTRATION NUMBER": "RP/19/2021/00566"
    },
    {
        "PROMOTER NAME": "M/S. UNITED REALTORS",
        "PROJECT NAME": "United Plaza",
        "REGISTRATION NUMBER": "RP/11/2021/00556"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL P.P ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2021/00491"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL SAPPHIRE",
        "REGISTRATION NUMBER": "RP/19/2021/00613"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL UTOPIA",
        "REGISTRATION NUMBER": "MP/19/2022/00646"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL CORPORATE PARK",
        "REGISTRATION NUMBER": "CP/19/2022/00703"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL RESERVE",
        "REGISTRATION NUMBER": "MP/19/2022/00687"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL PRIME",
        "REGISTRATION NUMBER": "RP/19/2022/00725"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL DASABATI",
        "REGISTRATION NUMBER": "MP/19/2022/00816"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL ICONIC",
        "REGISTRATION NUMBER": "CP/19/2023/01027"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL ISQUARE",
        "REGISTRATION NUMBER": "MP/19/2024/01120"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL SITANJALI",
        "REGISTRATION NUMBER": "RP/26/2023/01073"
    },
    {
        "PROMOTER NAME": "M/S. UTKAL BUILDERS LTD",
        "PROJECT NAME": "UTKAL ASPIRE",
        "REGISTRATION NUMBER": "RP/19/2024/01226"
    },
    {
        "PROMOTER NAME": "M/s. Versatile Constructions (P) Ltd",
        "PROJECT NAME": "Mitra Manson",
        "REGISTRATION NUMBER": "RP/19/2020/00383"
    },
    {
        "PROMOTER NAME": "M/s. Vikash Green Infratech Private Limited",
        "PROJECT NAME": "Kavyam Apartments",
        "REGISTRATION NUMBER": "RP/04/2021/00494"
    },
    {
        "PROMOTER NAME": "M/s. Vikash Green Infratech Private Limited",
        "PROJECT NAME": "Vikash Vintage",
        "REGISTRATION NUMBER": "RP/04/2022/00772"
    },
    {
        "PROMOTER NAME": "M/s. WIMAX ENGINEERS PVT. LTD",
        "PROJECT NAME": "SAI SERENITY",
        "REGISTRATION NUMBER": "RP/19/2020/00388"
    },
    {
        "PROMOTER NAME": "M/s. WIMAX ENGINEERS PVT. LTD",
        "PROJECT NAME": "SAI SERENITY",
        "REGISTRATION NUMBER": "RP/19/2024/01227"
    },
    {
        "PROMOTER NAME": "M/S. YOUGA YANTRI PRIVATE LIMITED",
        "PROJECT NAME": "ASHRAYA KUNJA",
        "REGISTRATION NUMBER": "RP/19/2020/00400"
    },
    {
        "PROMOTER NAME": "M/S. Z ESTATES PRIVATE LIMITED",
        "PROJECT NAME": "Z1 Nirvaana",
        "REGISTRATION NUMBER": "RP/19/2021/00586"
    },
    {
        "PROMOTER NAME": "M/S. ZEGMA DEVELOPERS PVT.LTD",
        "PROJECT NAME": "GALAXY APARTMENT",
        "REGISTRATION NUMBER": "RP/19/2021/00598"
    },
    {
        "PROMOTER NAME": "M/S. ZEVITH DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "SAI SRUSTI ENCLAVE",
        "REGISTRATION NUMBER": "RP/26/2024/01220"
    },
    {
        "PROMOTER NAME": "MAA TARINI REAL ESTATE PRIVATE LIMITED",
        "PROJECT NAME": "KIRAN HOME",
        "REGISTRATION NUMBER": "RP/19/2023/00861"
    },
    {
        "PROMOTER NAME": "MADHUSUDAN VILLA",
        "PROJECT NAME": "MADHUSUDAN VILLA",
        "REGISTRATION NUMBER": "RP/18/2023/00924"
    },
    {
        "PROMOTER NAME": "MAHADEV GRIHA NIRMAN PVT LTD",
        "PROJECT NAME": "Mahadev Heights",
        "REGISTRATION NUMBER": "RP/07/2019/00290."
    },
    {
        "PROMOTER NAME": "MAHADEV GRIHA NIRMAN PVT LTD",
        "PROJECT NAME": "MAHADEV GREENS",
        "REGISTRATION NUMBER": "MP/07/2023/00945"
    },
    {
        "PROMOTER NAME": "MAHANADI BUILDERS PRIVATE LIMITED",
        "PROJECT NAME": "SHREE GOPINATH ENCLVE",
        "REGISTRATION NUMBER": "RP/19/2022/00833"
    },
    {
        "PROMOTER NAME": "MAHAVIR BUILDERS",
        "PROJECT NAME": "MARUTI VILLA",
        "REGISTRATION NUMBER": "RP/02/2021/00536"
    },
    {
        "PROMOTER NAME": "MAHAVIR BUILDERS",
        "PROJECT NAME": "Sairam Villa PH-I",
        "REGISTRATION NUMBER": "RP/02/2023/00903"
    },
    {
        "PROMOTER NAME": "Mahima Infracon Pvt. Ltd",
        "PROJECT NAME": "MAHIMA PLAZA",
        "REGISTRATION NUMBER": "RP/19/2019/00309"
    },
    {
        "PROMOTER NAME": "Mahima Infracon Pvt. Ltd",
        "PROJECT NAME": "Susama Tower",
        "REGISTRATION NUMBER": "RP/19/2022/00758"
    },
    {
        "PROMOTER NAME": "Mahima Infracon Pvt. Ltd",
        "PROJECT NAME": "Mahima Plaza",
        "REGISTRATION NUMBER": "RP/19/2022/00678"
    },
    {
        "PROMOTER NAME": "Mahima Infracon Pvt. Ltd",
        "PROJECT NAME": "Susama Tower -II",
        "REGISTRATION NUMBER": "RP/19/2023/00937"
    },
    {
        "PROMOTER NAME": "Mahima Infracon Pvt. Ltd",
        "PROJECT NAME": "MAHIMA GREENEX",
        "REGISTRATION NUMBER": "RP/19/2023/00970"
    },
    {
        "PROMOTER NAME": "MAHODADHI ESTATE INDIA PRIVATE LIMITED.",
        "PROJECT NAME": "BLU SAPPHIRE",
        "REGISTRATION NUMBER": "RP/19/2023/01019"
    },
    {
        "PROMOTER NAME": "MAHODADHI ESTATE INDIA PRIVATE LIMITED.",
        "PROJECT NAME": "BLU SERENE",
        "REGISTRATION NUMBER": "RP/19/2024/01213"
    },
    {
        "PROMOTER NAME": "MAHODADHI INFRASTRUCTURE PRIVATE LIMITED",
        "PROJECT NAME": "SAI PLAZA ELITE",
        "REGISTRATION NUMBER": "RP/19/2019/00307"
    },
    {
        "PROMOTER NAME": "MANCHANATH DEV INFRACON PRIVATE LIMITED",
        "PROJECT NAME": "MANCHANATH AVENUE",
        "REGISTRATION NUMBER": "RP/19/2023/01000"
    },
    {
        "PROMOTER NAME": "MANJULATA INFRABUILD PRIVATE LIMITED",
        "PROJECT NAME": "MANMOHAN PLAZA",
        "REGISTRATION NUMBER": "RP/19/2024/01198"
    },
    {
        "PROMOTER NAME": "MANOR PROMOTERS PVT. LTD.",
        "PROJECT NAME": "RUKMINI RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2022/00756"
    },
    {
        "PROMOTER NAME": "Mass Buildcon Pvt. Ltd",
        "PROJECT NAME": "SAI ASHISH",
        "REGISTRATION NUMBER": "RP/19/2019/00337"
    },
    {
        "PROMOTER NAME": "METRO ACRERISE PROMOTERS PRIVATE LIMITED",
        "PROJECT NAME": "One World by Metro & AcreRise",
        "REGISTRATION NUMBER": "RP/19/2024/01115"
    },
    {
        "PROMOTER NAME": "MJ CITY DEVELOPERS",
        "PROJECT NAME": "M J Signature",
        "REGISTRATION NUMBER": "RP/07/2022/00710"
    },
    {
        "PROMOTER NAME": "MKBHOOMI INFRA PRIVATE LIMITED",
        "PROJECT NAME": "BHOOMI AAVAAS",
        "REGISTRATION NUMBER": "RP/19/2023/00858"
    },
    {
        "PROMOTER NAME": "MKSR BUILDERS PRIVATE LIMITED",
        "PROJECT NAME": "GOLDEN LANDING",
        "REGISTRATION NUMBER": "RP/19/2024/01137"
    },
    {
        "PROMOTER NAME": "MOHAMED LATIFUR RAHAMAN",
        "PROJECT NAME": "LATIFUR RAHMAN",
        "REGISTRATION NUMBER": "RP/19/2022/00635"
    },
    {
        "PROMOTER NAME": "MOTWANI CONSTRUCTIONS PVT LTD",
        "PROJECT NAME": "GM TERRACE",
        "REGISTRATION NUMBER": "RP/07/2022/00651"
    },
    {
        "PROMOTER NAME": "MOTWANI CONSTRUCTIONS PVT LTD",
        "PROJECT NAME": "ANANTARA",
        "REGISTRATION NUMBER": "RP/19/2024/01089"
    },
    {
        "PROMOTER NAME": "MOTWANI INDO NIRMAN",
        "PROJECT NAME": "BLISS",
        "REGISTRATION NUMBER": "RP/19/2023/00949"
    },
    {
        "PROMOTER NAME": "MOTWANI SAI SNEHA CONSTRUCTIONS",
        "PROJECT NAME": "LORDSWAY LAXMI",
        "REGISTRATION NUMBER": "RP/26/2023/00941"
    },
    {
        "PROMOTER NAME": "MR HOMES",
        "PROJECT NAME": "DR JR ENCLAVE",
        "REGISTRATION NUMBER": "MP/04/2024/01100"
    },
    {
        "PROMOTER NAME": "MS INFRASTRUCTURE AND DEVELOPERS",
        "PROJECT NAME": "ADITI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/00870"
    },
    {
        "PROMOTER NAME": "MS INFRASTRUCTURE AND DEVELOPERS",
        "PROJECT NAME": "ADITI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01230"
    },
    {
        "PROMOTER NAME": "MS INFRASTRUCTURE AND DEVELOPERS",
        "PROJECT NAME": "ROYAL RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01235"
    },
    {
        "PROMOTER NAME": "Mudra Infracon Private Limited",
        "PROJECT NAME": "Krishna Heights",
        "REGISTRATION NUMBER": "RP/19/2024/01225"
    },
    {
        "PROMOTER NAME": "MULK Developers Pvt. Ltd",
        "PROJECT NAME": "MULK MBN HOMES",
        "REGISTRATION NUMBER": "RP/19/2023/00873"
    },
    {
        "PROMOTER NAME": "MY HOME REAL ESTATE & DEVELOPERS",
        "PROJECT NAME": "My Home Villa",
        "REGISTRATION NUMBER": "RP/11/2023/01061"
    },
    {
        "PROMOTER NAME": "Nandan Realestate and Builders",
        "PROJECT NAME": "Divyanandan Heritage",
        "REGISTRATION NUMBER": "RP/11/2024/01242"
    },
    {
        "PROMOTER NAME": "NANDI INFRA",
        "PROJECT NAME": "MANGULU NAGAR",
        "REGISTRATION NUMBER": "RP/11/2023/00885"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH CITY-EAST",
        "REGISTRATION NUMBER": "RP/11/2022/00699"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH ELEGANT",
        "REGISTRATION NUMBER": "RP/11/2022/00702"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH SHREEKUNJ PHASE-I",
        "REGISTRATION NUMBER": "RP/11/2022/00806"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH SHREEKUNJ PHASE - II",
        "REGISTRATION NUMBER": "RP/11/2022/00830"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH AURA",
        "REGISTRATION NUMBER": "MP/11/2023/00860"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH RUKMINI RES.",
        "REGISTRATION NUMBER": "RP/11/2023/00890"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH SHREEKUNJ PHASE - III",
        "REGISTRATION NUMBER": "RP/11/2023/00908"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH SWASTIK",
        "REGISTRATION NUMBER": "RP/11/2023/00930"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH ADARSH RES.",
        "REGISTRATION NUMBER": "RP/11/2024/01105"
    },
    {
        "PROMOTER NAME": "NANDIGHOSH ESTATES PVT. LTD.",
        "PROJECT NAME": "NANDIGHOSH MEENAKSHI RES.",
        "REGISTRATION NUMBER": "RP/11/2024/01119"
    },
    {
        "PROMOTER NAME": "NARAYAN AGENCIES & ESTATES PVT.LTD",
        "PROJECT NAME": "SARASWATI RATNA KUNJA-II",
        "REGISTRATION NUMBER": "RP/19/2024/01129"
    },
    {
        "PROMOTER NAME": "NAVDEEP CONSTRUCTION CO",
        "PROJECT NAME": "AMRIT KALASH",
        "REGISTRATION NUMBER": "RP/19/2022/00835"
    },
    {
        "PROMOTER NAME": "NAWAH CORPORATE PRIVATE LIMITED",
        "PROJECT NAME": "9 EMPORIO",
        "REGISTRATION NUMBER": "RP/19/2024/01170"
    },
    {
        "PROMOTER NAME": "NIRMAN INFRASTRUCTURES JAGANNATH APARTMENT",
        "PROJECT NAME": "JAGANNATH APARTMENT",
        "REGISTRATION NUMBER": "RP/11/2021/00489"
    },
    {
        "PROMOTER NAME": "NRICAN INFRA PRIVATE LIMITED",
        "PROJECT NAME": "NRICAN DUET",
        "REGISTRATION NUMBER": "RP/19/2022/00763"
    },
    {
        "PROMOTER NAME": "Nuage Edifice Private Limited",
        "PROJECT NAME": "Bharat Vatika",
        "REGISTRATION NUMBER": "RP/11/2022/00803"
    },
    {
        "PROMOTER NAME": "OD RealEstate Pvt. Ltd.",
        "PROJECT NAME": "OD Residency",
        "REGISTRATION NUMBER": "RP/07/2022/00843"
    },
    {
        "PROMOTER NAME": "ODISHA STATE HOUSING BOARD",
        "PROJECT NAME": "ANUGUL ENCLAVE",
        "REGISTRATION NUMBER": "MP/01/2019/00311"
    },
    {
        "PROMOTER NAME": "ODISHA STATE HOUSING BOARD",
        "PROJECT NAME": "SUBHADRA ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2021/00602"
    },
    {
        "PROMOTER NAME": "ODISHA STATE HOUSING BOARD",
        "PROJECT NAME": "VASUDEV VIHAR",
        "REGISTRATION NUMBER": "RP/19/2021/00622"
    },
    {
        "PROMOTER NAME": "ODISHA UDYOG INFRAPROJECTS",
        "PROJECT NAME": "\"9 GRAND AVENUE\"",
        "REGISTRATION NUMBER": "RP/19/2019/00293"
    },
    {
        "PROMOTER NAME": "OM BUILDERS & DEVELOPERS",
        "PROJECT NAME": "OM TOWERS",
        "REGISTRATION NUMBER": "RP/20/2024/01155"
    },
    {
        "PROMOTER NAME": "OM DEVELOPER",
        "PROJECT NAME": "Sri Sri Dayananda Residence",
        "REGISTRATION NUMBER": "RP/11/2023/01021"
    },
    {
        "PROMOTER NAME": "OM SWASTIK",
        "PROJECT NAME": "URMILLA ABODE & VICTORY TOWER",
        "REGISTRATION NUMBER": "MP/19/2022/00661"
    },
    {
        "PROMOTER NAME": "Omacs Properties Private Limited",
        "PROJECT NAME": "Naman Palace",
        "REGISTRATION NUMBER": "RP/19/2023/00846"
    },
    {
        "PROMOTER NAME": "OMM ESTCON PVT LTD",
        "PROJECT NAME": "HEMALATA MANSION - I",
        "REGISTRATION NUMBER": "RP/19/2024/01160"
    },
    {
        "PROMOTER NAME": "Omm Satyasai Housing Pvt. Ltd",
        "PROJECT NAME": "Sai Vilash",
        "REGISTRATION NUMBER": "RP/19/2019/00340"
    },
    {
        "PROMOTER NAME": "OMM TECH AND PROPERTIES PRIVATE LIMITED",
        "PROJECT NAME": "DEBAKI EMPIRES",
        "REGISTRATION NUMBER": "RP/19/2024/01245"
    },
    {
        "PROMOTER NAME": "OMMBASTU BUILDCON PRIVATE LIMITED",
        "PROJECT NAME": "PADMANANDA PALACE",
        "REGISTRATION NUMBER": "RP/19/2023/00879"
    },
    {
        "PROMOTER NAME": "Omshree Infratech Pvt.Ltd",
        "PROJECT NAME": "OM SHREE PRIDE",
        "REGISTRATION NUMBER": "RP/19/2022/00722"
    },
    {
        "PROMOTER NAME": "Omshree Infratech Pvt.Ltd",
        "PROJECT NAME": "OMSHREE ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/01071"
    },
    {
        "PROMOTER NAME": "ORCHARD INFRATECH",
        "PROJECT NAME": "ORCHARD LIFESTYLE",
        "REGISTRATION NUMBER": "RP/04/2023/00912"
    },
    {
        "PROMOTER NAME": "P K Developers",
        "PROJECT NAME": "SURYA UDAY",
        "REGISTRATION NUMBER": "RP/30/2022/00733"
    },
    {
        "PROMOTER NAME": "PARIBARTANBIKASH INFRA VENTURES PRIVATE LIMITED",
        "PROJECT NAME": "JYOTI RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2022/00634"
    },
    {
        "PROMOTER NAME": "PAWANI VENTURES PVT.LTD.",
        "PROJECT NAME": "LA-VISTA",
        "REGISTRATION NUMBER": "MP/19/2023/01045"
    },
    {
        "PROMOTER NAME": "PEARLTOUCH INFRA",
        "PROJECT NAME": "ELITE APARTMENT",
        "REGISTRATION NUMBER": "RP/20/2023/00946"
    },
    {
        "PROMOTER NAME": "Penguin Homes Private Limited",
        "PROJECT NAME": "PENGUIN VISION",
        "REGISTRATION NUMBER": "RP/19/2021/00604"
    },
    {
        "PROMOTER NAME": "Persistent Aluminium Pvt. Ltd.",
        "PROJECT NAME": "Prem Vihar",
        "REGISTRATION NUMBER": "RP/28/2020/00351"
    },
    {
        "PROMOTER NAME": "Persistent Aluminium Pvt. Ltd.",
        "PROJECT NAME": "LAXMI VIHAR",
        "REGISTRATION NUMBER": "RP/28/2021/00611"
    },
    {
        "PROMOTER NAME": "PKP Homes Private Limited",
        "PROJECT NAME": "PKP SOLITAIRE",
        "REGISTRATION NUMBER": "RP/19/2022/00686"
    },
    {
        "PROMOTER NAME": "PPL Infrastructures",
        "PROJECT NAME": "G.K.RESIDENCY",
        "REGISTRATION NUMBER": "RP/27/2022/00728"
    },
    {
        "PROMOTER NAME": "Prabhukrupa Realties Private Limited",
        "PROJECT NAME": "RAJENDRA ENCLAVE",
        "REGISTRATION NUMBER": "MP/26/2019/00317"
    },
    {
        "PROMOTER NAME": "Prime Properties",
        "PROJECT NAME": "Prime Glory",
        "REGISTRATION NUMBER": "RP/11/2022/00664"
    },
    {
        "PROMOTER NAME": "R.K ASSETS AND DEVELOPERS PVT.LTD.",
        "PROJECT NAME": "RK BHOLINATH AVENUE",
        "REGISTRATION NUMBER": "RP/19/2022/00708"
    },
    {
        "PROMOTER NAME": "RA HOUSING & INFRA PRIVATE LIMITED",
        "PROJECT NAME": "Saswat Kottage",
        "REGISTRATION NUMBER": "RP/19/2021/00608"
    },
    {
        "PROMOTER NAME": "Radha Govind Future Solutions Private Limited",
        "PROJECT NAME": "Radha Govind Fortune",
        "REGISTRATION NUMBER": "RP/19/2022/00665"
    },
    {
        "PROMOTER NAME": "Radha Govind Future Solutions Private Limited",
        "PROJECT NAME": "Radha Govind Royal",
        "REGISTRATION NUMBER": "RP/19/2022/00822"
    },
    {
        "PROMOTER NAME": "RADHA KRUSHNA ROYAL",
        "PROJECT NAME": "RADHA KRISHNA ROYAL",
        "REGISTRATION NUMBER": "RP/11/2024/01136"
    },
    {
        "PROMOTER NAME": "Radhamani Panda",
        "PROJECT NAME": "Radhamani Enclave",
        "REGISTRATION NUMBER": "RP/18/2020/00344"
    },
    {
        "PROMOTER NAME": "RAJA RANI REAL ESTATE",
        "PROJECT NAME": "RAJA RANI BHUVAN",
        "REGISTRATION NUMBER": "RP/11/2021/00506"
    },
    {
        "PROMOTER NAME": "RAJA RANI REAL ESTATE",
        "PROJECT NAME": "RAJA RANI  HIGHFIELD",
        "REGISTRATION NUMBER": "RP/11/2021/00492"
    },
    {
        "PROMOTER NAME": "RAJA RANI REAL ESTATE",
        "PROJECT NAME": "RAJA RANI NILAYA",
        "REGISTRATION NUMBER": "RP/11/2022/00696"
    },
    {
        "PROMOTER NAME": "RAJA RANI REAL ESTATE",
        "PROJECT NAME": "RAJA RANI PARADISE",
        "REGISTRATION NUMBER": "MP/11/2022/00712"
    },
    {
        "PROMOTER NAME": "Ramesh Kumar Kedia",
        "PROJECT NAME": "SRI RAM KUTIR",
        "REGISTRATION NUMBER": "RP/28/2023/00863"
    },
    {
        "PROMOTER NAME": "Ramesh Kumar Kedia",
        "PROJECT NAME": "SRI RAM KUTIR (BUILDING NAME-LUV)",
        "REGISTRATION NUMBER": "RP/28/2024/01110"
    },
    {
        "PROMOTER NAME": "RANKANIDHI PATI",
        "PROJECT NAME": "ANANTA VIHAR",
        "REGISTRATION NUMBER": "RP/18/2021/00497"
    },
    {
        "PROMOTER NAME": "RASBIHARI PRADHAN",
        "PROJECT NAME": "RUDRANSH GREEN VILLA - II",
        "REGISTRATION NUMBER": "RP/19/2023/01052"
    },
    {
        "PROMOTER NAME": "REFORM ESTATES",
        "PROJECT NAME": "Rudralaya",
        "REGISTRATION NUMBER": "RP/19/2023/00889"
    },
    {
        "PROMOTER NAME": "REGENCY CONSTRUCTIONS",
        "PROJECT NAME": "REGENCY MANSION",
        "REGISTRATION NUMBER": "RP/19/2023/00971"
    },
    {
        "PROMOTER NAME": "RELIANCE REALCON",
        "PROJECT NAME": "ANSHIKA ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/01015"
    },
    {
        "PROMOTER NAME": "RENU JAIN",
        "PROJECT NAME": "BRINDAVAN GARDEN",
        "REGISTRATION NUMBER": "RP/02/2021/00528"
    },
    {
        "PROMOTER NAME": "RJ ESTCON PRIVATE LIMITED",
        "PROJECT NAME": "RJ AVENUE",
        "REGISTRATION NUMBER": "RP/19/2023/01072"
    },
    {
        "PROMOTER NAME": "Royal Construction",
        "PROJECT NAME": "Lotus Garden",
        "REGISTRATION NUMBER": "RP/11/2023/01048"
    },
    {
        "PROMOTER NAME": "Royal Mahanagar Infrastructure and Developers",
        "PROJECT NAME": "Pal Avenue",
        "REGISTRATION NUMBER": "RP/19/2021/00609"
    },
    {
        "PROMOTER NAME": "RSS ENTERPRISES",
        "PROJECT NAME": "GOPAL NIWAS",
        "REGISTRATION NUMBER": "RP/19/2022/00694"
    },
    {
        "PROMOTER NAME": "S B REALCON PVT LTD",
        "PROJECT NAME": "KOKILA GARDEN ANNEX",
        "REGISTRATION NUMBER": "RP/19/2023/00985"
    },
    {
        "PROMOTER NAME": "S B REALCON PVT LTD",
        "PROJECT NAME": "Kokila Dream Home",
        "REGISTRATION NUMBER": "RP/19/2024/01138"
    },
    {
        "PROMOTER NAME": "S B REALCON PVT LTD",
        "PROJECT NAME": "KOKILA AWAS",
        "REGISTRATION NUMBER": "RP/19/2024/01153"
    },
    {
        "PROMOTER NAME": "S P Construction",
        "PROJECT NAME": "Narayani Enclave",
        "REGISTRATION NUMBER": "RP/19/2021/00555"
    },
    {
        "PROMOTER NAME": "S S GREEN INFRASTRUCTURE LLP",
        "PROJECT NAME": "SS GREENAGE",
        "REGISTRATION NUMBER": "RP/04/2022/00672"
    },
    {
        "PROMOTER NAME": "S S GREEN INFRASTRUCTURE LLP",
        "PROJECT NAME": "S.S. Green Woods",
        "REGISTRATION NUMBER": "RP/04/2022/00729"
    },
    {
        "PROMOTER NAME": "S S INFRA SOLUTIONS PVT. LTD",
        "PROJECT NAME": "S.S. VIJAY ARCADE",
        "REGISTRATION NUMBER": "RP/02/2019/00339"
    },
    {
        "PROMOTER NAME": "S.M.DEVELOPERS & PROMOTERS",
        "PROJECT NAME": "ZEN LIFESTYLE",
        "REGISTRATION NUMBER": "RP/19/2022/00673"
    },
    {
        "PROMOTER NAME": "S.S CONSTRUCTIONS",
        "PROJECT NAME": "PAVING STONE",
        "REGISTRATION NUMBER": "RP/26/2023/01043"
    },
    {
        "PROMOTER NAME": "S.S. REALCON",
        "PROJECT NAME": "CHARULATA RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/01016"
    },
    {
        "PROMOTER NAME": "Safetyland Estate Pvt Ltd.",
        "PROJECT NAME": "Shree Vinayak Heritage",
        "REGISTRATION NUMBER": "RP/19/2023/00907"
    },
    {
        "PROMOTER NAME": "Sagar Complex Private Limited",
        "PROJECT NAME": "Ashapura Homes",
        "REGISTRATION NUMBER": "RP/19/2022/00644"
    },
    {
        "PROMOTER NAME": "SAHEJ TOWERS PVT LTD",
        "PROJECT NAME": "SAHEJ GRAND",
        "REGISTRATION NUMBER": "RP/19/2023/00956"
    },
    {
        "PROMOTER NAME": "SAI ARATI HOMES PRIVATE LIMITED",
        "PROJECT NAME": "PARX RESIDENCY",
        "REGISTRATION NUMBER": "RP/26/2024/01250"
    },
    {
        "PROMOTER NAME": "SAI ASHIRBAD INFRATECH",
        "PROJECT NAME": "SAI ABODE",
        "REGISTRATION NUMBER": "RP/19/2024/01090"
    },
    {
        "PROMOTER NAME": "SAI BHAGABATI MULTIPROJECTS PVT. LTD.",
        "PROJECT NAME": "ROYAL HOMES",
        "REGISTRATION NUMBER": "MP/19/2022/00711"
    },
    {
        "PROMOTER NAME": "Sai Harmony Pvt. Ltd",
        "PROJECT NAME": "Costa Furtune",
        "REGISTRATION NUMBER": "RP/19/2023/00854"
    },
    {
        "PROMOTER NAME": "Sai Harmony Pvt. Ltd",
        "PROJECT NAME": "COSTA FURTUNE CRESTVIEW",
        "REGISTRATION NUMBER": "MP/19/2024/01244"
    },
    {
        "PROMOTER NAME": "SAIBABA INFRA SERVICES",
        "PROJECT NAME": "Sai Sradha Enclave",
        "REGISTRATION NUMBER": "RP/11/2024/01159"
    },
    {
        "PROMOTER NAME": "Saikrishna Homes Private Limited",
        "PROJECT NAME": "Panchawati Residency",
        "REGISTRATION NUMBER": "RP/19/2023/00993"
    },
    {
        "PROMOTER NAME": "Saikrishna Homes Private Limited",
        "PROJECT NAME": "SAI KRISHNA RESIDENCY",
        "REGISTRATION NUMBER": "MP/19/2024/01126"
    },
    {
        "PROMOTER NAME": "SAINATH EARTH MOVERS PVT. LTD",
        "PROJECT NAME": "PRITI HEIGHTS",
        "REGISTRATION NUMBER": "RP/19/2023/00894"
    },
    {
        "PROMOTER NAME": "SAINATH EARTH MOVERS PVT. LTD",
        "PROJECT NAME": "PRITI MANSION",
        "REGISTRATION NUMBER": "RP/19/2023/00918"
    },
    {
        "PROMOTER NAME": "SAMPURNA CONTECH PRIVATE LIMITED",
        "PROJECT NAME": "SAMPURNA MAXIMA",
        "REGISTRATION NUMBER": "RP/19/2024/01207"
    },
    {
        "PROMOTER NAME": "SAMRIDHI DEVELOPERS",
        "PROJECT NAME": "SAMRIDHI GREENS",
        "REGISTRATION NUMBER": "RP/28/2024/01224"
    },
    {
        "PROMOTER NAME": "SANJAY INFRASTRUCTURE DEVELOPMENT PRIVATE LIMITED",
        "PROJECT NAME": "SANJAY TOWERS",
        "REGISTRATION NUMBER": "RP/03/2023/01056"
    },
    {
        "PROMOTER NAME": "Sanjay Kumar Sharma",
        "PROJECT NAME": "Param Arvind Vihar",
        "REGISTRATION NUMBER": "RP/28/2022/00668"
    },
    {
        "PROMOTER NAME": "SANJITA PROJECTS PRIVATE LIMITED",
        "PROJECT NAME": "SRADHA AANGAN",
        "REGISTRATION NUMBER": "RP/19/2024/01118"
    },
    {
        "PROMOTER NAME": "Santikrishna Developers Private Limited",
        "PROJECT NAME": "Debapratima Enclave",
        "REGISTRATION NUMBER": "RP/19/2019/00328"
    },
    {
        "PROMOTER NAME": "Santikrishna Developers Private Limited",
        "PROJECT NAME": "MAYA PALLADIAN",
        "REGISTRATION NUMBER": "RP/19/2023/01081"
    },
    {
        "PROMOTER NAME": "SAP CONSTRUCTION & ESTATES PRIVATE LIMITED",
        "PROJECT NAME": "Sap signature",
        "REGISTRATION NUMBER": "RP/19/2023/01060"
    },
    {
        "PROMOTER NAME": "SAPTAGIRI PRIME DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "NILADRI HERITAGE",
        "REGISTRATION NUMBER": "RP/26/2024/01179"
    },
    {
        "PROMOTER NAME": "Sarat Kumar Kantha",
        "PROJECT NAME": "SARADA ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2021/00605"
    },
    {
        "PROMOTER NAME": "Saswat Infrastructure Pvt Ltd",
        "PROJECT NAME": "SASWAT RIVERSIDE",
        "REGISTRATION NUMBER": "RP/07/2023/00978"
    },
    {
        "PROMOTER NAME": "Satya Bhama Promoters",
        "PROJECT NAME": "Satya Niwas",
        "REGISTRATION NUMBER": "RP/11/2019/00250"
    },
    {
        "PROMOTER NAME": "SATYAM CONSTRUCTION CO.",
        "PROJECT NAME": "SHUVAM RENU RESIDENCY PHASE-2",
        "REGISTRATION NUMBER": "RP/19/2023/00958"
    },
    {
        "PROMOTER NAME": "SCHEME-ART REAL ESTATE PRIVATE LIMITED",
        "PROJECT NAME": "NUA GHARA",
        "REGISTRATION NUMBER": "MP/07/2024/01238"
    },
    {
        "PROMOTER NAME": "Secure Infracon Pvt. Ltd",
        "PROJECT NAME": "Secure Blossoms",
        "REGISTRATION NUMBER": "RP/19/2023/00857"
    },
    {
        "PROMOTER NAME": "SHERAWALI REALCON PVT.LTD.",
        "PROJECT NAME": "SHERAWALI HOMES",
        "REGISTRATION NUMBER": "RP/11/2022/00698"
    },
    {
        "PROMOTER NAME": "SHIV DEVELOPERS",
        "PROJECT NAME": "GODAVARI PLAZA",
        "REGISTRATION NUMBER": "MP/28/2022/00842"
    },
    {
        "PROMOTER NAME": "shradha enterprises",
        "PROJECT NAME": "shradha tower",
        "REGISTRATION NUMBER": "RP/20/2024/01191"
    },
    {
        "PROMOTER NAME": "SHREE BHULAXMI REALCON PVT.LTD",
        "PROJECT NAME": "RANGANEE ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/01037"
    },
    {
        "PROMOTER NAME": "SHREE BUILDERS & DEVELOPERS",
        "PROJECT NAME": "SHREE KUNJ ENCLAVE",
        "REGISTRATION NUMBER": "RP/28/2023/01065"
    },
    {
        "PROMOTER NAME": "Shree Ganesh Buildcon Pvt. Ltd.",
        "PROJECT NAME": "Pramod Heights",
        "REGISTRATION NUMBER": "MP/19/2019/00318"
    },
    {
        "PROMOTER NAME": "Shree Ganesh Buildcon Pvt. Ltd.",
        "PROJECT NAME": "PRAMOD HEIGHTS",
        "REGISTRATION NUMBER": "MP/19/2023/01068"
    },
    {
        "PROMOTER NAME": "Shree Ganesh Buildcon Pvt. Ltd.",
        "PROJECT NAME": "Rashmi Lifestyle-II",
        "REGISTRATION NUMBER": "RP/19/2021/00616"
    },
    {
        "PROMOTER NAME": "Shree Ganesh Buildcon Pvt. Ltd.",
        "PROJECT NAME": "Rashmi Enclave-II",
        "REGISTRATION NUMBER": "RP/19/2022/00652"
    },
    {
        "PROMOTER NAME": "Shree Ganesh Buildcon Pvt. Ltd.",
        "PROJECT NAME": "NAVYA RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2022/00697"
    },
    {
        "PROMOTER NAME": "SHREE GOKULDHAM APARTMENTS LLP",
        "PROJECT NAME": "GOKUL DHAM",
        "REGISTRATION NUMBER": "RP/28/2022/00667"
    },
    {
        "PROMOTER NAME": "SHREE RAM CONSTRUCTIONS",
        "PROJECT NAME": "SRC SIGNATURE",
        "REGISTRATION NUMBER": "MP/07/2022/00811"
    },
    {
        "PROMOTER NAME": "Shree Sai Gopinath Construction",
        "PROJECT NAME": "SAI UMESH",
        "REGISTRATION NUMBER": "RP/19/2023/00989"
    },
    {
        "PROMOTER NAME": "SHREEHARI CONSTRUCTIONS",
        "PROJECT NAME": "SHREEHARI CITY",
        "REGISTRATION NUMBER": "RP/26/2024/01209"
    },
    {
        "PROMOTER NAME": "SHREEHARI CONSTRUCTIONS",
        "PROJECT NAME": "SHREEHARI CITY PH-1",
        "REGISTRATION NUMBER": "RP/26/2024/01205"
    },
    {
        "PROMOTER NAME": "Shreemaa Infra PROJECT",
        "PROJECT NAME": "Shreemaa Complex",
        "REGISTRATION NUMBER": "MP/09/2021/00625"
    },
    {
        "PROMOTER NAME": "Shri Caitanya Builders and Developers Pvt. Ltd.",
        "PROJECT NAME": "Krishna Residency",
        "REGISTRATION NUMBER": "RP/19/2023/00876"
    },
    {
        "PROMOTER NAME": "SIDDHI VINAYAK BUILDCON",
        "PROJECT NAME": "RAM GOVIND ENCLAVE",
        "REGISTRATION NUMBER": "RP/28/2022/00677"
    },
    {
        "PROMOTER NAME": "SIDHI CONSTRUCTIONS",
        "PROJECT NAME": "SIDHI HOMES",
        "REGISTRATION NUMBER": "RP/11/2023/00913"
    },
    {
        "PROMOTER NAME": "Silkcity Developers",
        "PROJECT NAME": "PANCHAVATI",
        "REGISTRATION NUMBER": "RP/11/2022/00636"
    },
    {
        "PROMOTER NAME": "SILKCITY REALESTATE",
        "PROJECT NAME": "SILKCITY SB GALAXY",
        "REGISTRATION NUMBER": "RP/11/2022/00789"
    },
    {
        "PROMOTER NAME": "Simanchal Das",
        "PROJECT NAME": "MEENAKSHI URVI",
        "REGISTRATION NUMBER": "RP/19/2023/00934"
    },
    {
        "PROMOTER NAME": "SINEWAY PROJECTS PVT LTD",
        "PROJECT NAME": "SINEWAY SAANVI ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/01044"
    },
    {
        "PROMOTER NAME": "SKY BUILDZ CONSTRUCTION",
        "PROJECT NAME": "7TH SKY APARTMENT",
        "REGISTRATION NUMBER": "RP/19/2024/01092"
    },
    {
        "PROMOTER NAME": "SKYORBIT REAL INFRA PVT. LTD.",
        "PROJECT NAME": "BARSANA NAGAR",
        "REGISTRATION NUMBER": "RP/28/2022/00718"
    },
    {
        "PROMOTER NAME": "SKYORBIT REAL INFRA PVT. LTD.",
        "PROJECT NAME": "BARSANA NAGAR-II",
        "REGISTRATION NUMBER": "RP/28/2022/00719"
    },
    {
        "PROMOTER NAME": "SN MOHAPATRA DEVELOPER PVT. LTD.",
        "PROJECT NAME": "SN GOVIND MANSION",
        "REGISTRATION NUMBER": "RP/19/2023/01041"
    },
    {
        "PROMOTER NAME": "SP CONSTRUCTIONS",
        "PROJECT NAME": "SP AANGAN",
        "REGISTRATION NUMBER": "RP/19/2022/00819"
    },
    {
        "PROMOTER NAME": "SPECIFIC INFRAPROJECTS PVT LTD",
        "PROJECT NAME": "SPECIFIC ROYAL GALAXY",
        "REGISTRATION NUMBER": "RP/19/2024/01201"
    },
    {
        "PROMOTER NAME": "SPICA INFRASTRUCTURE AND CONSULTANCY PVT. LTD.",
        "PROJECT NAME": "RAGHUNANDAN ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00786"
    },
    {
        "PROMOTER NAME": "SPICA INFRASTRUCTURE AND CONSULTANCY PVT. LTD.",
        "PROJECT NAME": "SHREE KESHABA AVENUE",
        "REGISTRATION NUMBER": "MP/19/2023/01053"
    },
    {
        "PROMOTER NAME": "SR CONSTRUCTION",
        "PROJECT NAME": "AMULYA  PLAZA",
        "REGISTRATION NUMBER": "RP/19/2022/00777"
    },
    {
        "PROMOTER NAME": "SR INFRASOLUTIONS PVT LTD",
        "PROJECT NAME": "SR MAGNUS",
        "REGISTRATION NUMBER": "RP/19/2022/00641"
    },
    {
        "PROMOTER NAME": "SRI JAGANNATH PROMOTERS & BUILDERS",
        "PROJECT NAME": "SHREEKHETRA GREENPARK",
        "REGISTRATION NUMBER": "RP/19/2023/01009"
    },
    {
        "PROMOTER NAME": "SRI SAMPURNA",
        "PROJECT NAME": "SRI SAMPURNA AQUA",
        "REGISTRATION NUMBER": "RP/07/2022/00844"
    },
    {
        "PROMOTER NAME": "SRI SHYAM & CO",
        "PROJECT NAME": "S.S. GREEN CITY",
        "REGISTRATION NUMBER": "RP/04/2024/01211"
    },
    {
        "PROMOTER NAME": "SS GREEN INFRA DEVELEOPERS",
        "PROJECT NAME": "S.S. GOPANJALI ARCADE",
        "REGISTRATION NUMBER": "RP/02/2021/00620"
    },
    {
        "PROMOTER NAME": "SSHARP Nirman Pvt. Ltd",
        "PROJECT NAME": "DHANANJAY RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2019/00335"
    },
    {
        "PROMOTER NAME": "SSPP Constructions Private Limited",
        "PROJECT NAME": "DHANALAXMI RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2023/00964"
    },
    {
        "PROMOTER NAME": "STALWART RA HOUSING COMPANY",
        "PROJECT NAME": "PARADISE",
        "REGISTRATION NUMBER": "RP/19/2024/01189"
    },
    {
        "PROMOTER NAME": "STARLING REALTY PRIVATE LIMITED",
        "PROJECT NAME": "STARLING PARK VIEW",
        "REGISTRATION NUMBER": "RP/19/2024/01149"
    },
    {
        "PROMOTER NAME": "State Bank of India Staff Association Co-Operative Society Odisha Ltd Cuttack.",
        "PROJECT NAME": "ABHINABA",
        "REGISTRATION NUMBER": "RP/19/2023/00950"
    },
    {
        "PROMOTER NAME": "SUBASH CHANDRA MOHANTY",
        "PROJECT NAME": "KAMALA RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/00901"
    },
    {
        "PROMOTER NAME": "SUBASINI BUILDERS",
        "PROJECT NAME": "RUDRANSH GREEN VILLA",
        "REGISTRATION NUMBER": "RP/19/2021/00601"
    },
    {
        "PROMOTER NAME": "SUBHA CONSTRUCTION & DEVELOPERS",
        "PROJECT NAME": "SUBHA RATNAM",
        "REGISTRATION NUMBER": "RP/19/2024/01193"
    },
    {
        "PROMOTER NAME": "SUBHADRA ENGINEERING",
        "PROJECT NAME": "THE ROYAL COTTAGE",
        "REGISTRATION NUMBER": "MP/05/2022/00826"
    },
    {
        "PROMOTER NAME": "SUBHADRA REALCON PRIVATE LIMITED",
        "PROJECT NAME": "SUBHADRA SERENITY",
        "REGISTRATION NUMBER": "RP/12/2024/01232"
    },
    {
        "PROMOTER NAME": "SUBHALAKHMI MULTIPLEX PRIVATE LIMITED",
        "PROJECT NAME": "SHIVALOK",
        "REGISTRATION NUMBER": "RP/19/2020/00378"
    },
    {
        "PROMOTER NAME": "SUBHALAKHMI SUBHAM MULTIPLEX PVT.LTD",
        "PROJECT NAME": "SURYA PALACE",
        "REGISTRATION NUMBER": "RP/19/2022/00800"
    },
    {
        "PROMOTER NAME": "Subhalaxmi Mohapatra",
        "PROJECT NAME": "SUBHALAXMI ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2022/00628"
    },
    {
        "PROMOTER NAME": "SUCHETA DAS",
        "PROJECT NAME": "INDRANI BHAWAN",
        "REGISTRATION NUMBER": "RP/19/2022/00754"
    },
    {
        "PROMOTER NAME": "SUKHYAT ESTATES AND CONSTRUCTIONS PVT. LTD.",
        "PROJECT NAME": "SAI REKHA ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2023/01031"
    },
    {
        "PROMOTER NAME": "SUNITA CHOUDHARY",
        "PROJECT NAME": "DHPL ENCLAVE 2",
        "REGISTRATION NUMBER": "RP/19/2021/00440"
    },
    {
        "PROMOTER NAME": "SUNITA CHOUDHARY",
        "PROJECT NAME": "DHPL ENCLAVE 3",
        "REGISTRATION NUMBER": "RP/19/2021/00441"
    },
    {
        "PROMOTER NAME": "SUNITA KUMARI SAHU",
        "PROJECT NAME": "SAI OM RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2023/00849"
    },
    {
        "PROMOTER NAME": "SUPRATIK INFRA VENTURES PRIVATE LIMITED",
        "PROJECT NAME": "SUPRATIK LIFESTYLE - II",
        "REGISTRATION NUMBER": "RP/03/2022/00836"
    },
    {
        "PROMOTER NAME": "SUPRATIK INFRA VENTURES PRIVATE LIMITED",
        "PROJECT NAME": "SUPRATIK LIFESTYLE - III",
        "REGISTRATION NUMBER": "RP/03/2023/00923"
    },
    {
        "PROMOTER NAME": "Suraj Kumar Agrawalla",
        "PROJECT NAME": "Urmila Enclave",
        "REGISTRATION NUMBER": "RP/01/2019/00324"
    },
    {
        "PROMOTER NAME": "Suraj Prakash Kanungo",
        "PROJECT NAME": "Sri Siddhi Vinayak Rasidency",
        "REGISTRATION NUMBER": "RP/07/2019/00258"
    },
    {
        "PROMOTER NAME": "Suravi Builders Private Limited",
        "PROJECT NAME": "Kalyan Plaza",
        "REGISTRATION NUMBER": "RP/19/2019/00323"
    },
    {
        "PROMOTER NAME": "SURNAG BUILDERS PVT.LTD",
        "PROJECT NAME": "SARASWATI RATNA KUNJA",
        "REGISTRATION NUMBER": "RP/19/2023/00988"
    },
    {
        "PROMOTER NAME": "SURNAG BUILDERS PVT.LTD",
        "PROJECT NAME": "RATNA HERITAGE",
        "REGISTRATION NUMBER": "RP/26/2023/01046"
    },
    {
        "PROMOTER NAME": "SURYO UDYOG LIMITED",
        "PROJECT NAME": "SURYO UDYOG ESTATE (GREEN VILLAGE)",
        "REGISTRATION NUMBER": "RP/19/2024/01246"
    },
    {
        "PROMOTER NAME": "Susanta Kumar Mohanty",
        "PROJECT NAME": "SS COTTAGE",
        "REGISTRATION NUMBER": "RP/19/2019/00271"
    },
    {
        "PROMOTER NAME": "SUSHRITA MISHRA",
        "PROJECT NAME": "SUSHRITA NILAYAM",
        "REGISTRATION NUMBER": "MP/19/2023/00973"
    },
    {
        "PROMOTER NAME": "SUSHRITA MISHRA",
        "PROJECT NAME": "The Igloo",
        "REGISTRATION NUMBER": "RP/26/2023/00966"
    },
    {
        "PROMOTER NAME": "Susritam Builders and Developers Pvt.Ltd.",
        "PROJECT NAME": "SUSHREE ENCLAVE",
        "REGISTRATION NUMBER": "RP/19/2019/00291"
    },
    {
        "PROMOTER NAME": "Susritam Builders and Developers Pvt.Ltd.",
        "PROJECT NAME": "SUSHREE PARADISE",
        "REGISTRATION NUMBER": "RP/19/2023/00887"
    },
    {
        "PROMOTER NAME": "SWAIN CONSTRUCTION & CONSULTANCY",
        "PROJECT NAME": "ODISHA GRAMYA BANK  EMPLOYEES  RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2023/00878"
    },
    {
        "PROMOTER NAME": "Tanaya Promotors",
        "PROJECT NAME": "Rahas Vatika",
        "REGISTRATION NUMBER": "RP/11/2024/01104"
    },
    {
        "PROMOTER NAME": "TAPAN Z ESTATES PRIVATE LIMITED",
        "PROJECT NAME": "BERHAMPUR-1",
        "REGISTRATION NUMBER": "RP/11/2022/00768"
    },
    {
        "PROMOTER NAME": "TATHASTU INFRASTRUCTURE PRIVATE LIMITED",
        "PROJECT NAME": "TATHASTU EXOTICA",
        "REGISTRATION NUMBER": "RP/19/2023/00869"
    },
    {
        "PROMOTER NAME": "Tatwamashi Marketing Private Limited",
        "PROJECT NAME": "Elite Avenue",
        "REGISTRATION NUMBER": "RP/19/2020/00350"
    },
    {
        "PROMOTER NAME": "Temple City Eastcon Pvt Ltd",
        "PROJECT NAME": "EMERALD PLAZA",
        "REGISTRATION NUMBER": "RP/19/2022/00679"
    },
    {
        "PROMOTER NAME": "THINK ROOF INFRA PRIVATE LIMITED.",
        "PROJECT NAME": "THINK ROOF EKAYAN",
        "REGISTRATION NUMBER": "RP/19/2023/00994"
    },
    {
        "PROMOTER NAME": "THRESHOLD DEVELOPERS PRIVATE LIMITED",
        "PROJECT NAME": "THRESHOLD LANDMARK",
        "REGISTRATION NUMBER": "RP/19/2023/01007"
    },
    {
        "PROMOTER NAME": "TITAN DAS",
        "PROJECT NAME": "DIAMOND HOMES",
        "REGISTRATION NUMBER": "RP/19/2022/00825"
    },
    {
        "PROMOTER NAME": "TRILOCHAN PROJECTS AND DEVELOPERS PVT. LTD",
        "PROJECT NAME": "HARIHAR RESIDENCY",
        "REGISTRATION NUMBER": "RP/19/2024/01188"
    },
    {
        "PROMOTER NAME": "Udaya Homes",
        "PROJECT NAME": "RADHA KRUSHNA RESIDENCY",
        "REGISTRATION NUMBER": "RP/11/2023/01017"
    },
    {
        "PROMOTER NAME": "ULTRALOOK VENTURES PRIVATE LIMITED",
        "PROJECT NAME": "MAA SANTOSHI ENCLAVE BLOCK-B",
        "REGISTRATION NUMBER": "RP/19/2022/00640"
    },
    {
        "PROMOTER NAME": "UMANGESTATE",
        "PROJECT NAME": "umang residency",
        "REGISTRATION NUMBER": "RP/19/2023/01080"
    },
    {
        "PROMOTER NAME": "URBAN ABODE PROJECTS PRIVATE LIMITED",
        "PROJECT NAME": "URBAN QUARTZ",
        "REGISTRATION NUMBER": "RP/19/2024/01204"
    },
    {
        "PROMOTER NAME": "URBAN DEVELOPERS",
        "PROJECT NAME": "URBAN HEIGHTS",
        "REGISTRATION NUMBER": "RP/30/2024/01158"
    },
    {
        "PROMOTER NAME": "URBAN LIVING BUILDERS LLP",
        "PROJECT NAME": "URBAN MAJESTIC",
        "REGISTRATION NUMBER": "RP/19/2024/01123"
    },
    {
        "PROMOTER NAME": "URBAN LIVING DEVELOPERS LLP",
        "PROJECT NAME": "URBAN SERENO",
        "REGISTRATION NUMBER": "RP/19/2023/01078"
    },
    {
        "PROMOTER NAME": "URBANYX INFRA PRIVATE LIMITED",
        "PROJECT NAME": "URBANYX COURT",
        "REGISTRATION NUMBER": "RP/19/2023/00871"
    },
    {
        "PROMOTER NAME": "UTKAL REALTORS PVT. LTD.",
        "PROJECT NAME": "UTKAL LEVELS",
        "REGISTRATION NUMBER": "RP/19/2022/00840"
    },
    {
        "PROMOTER NAME": "UTKAL SHELTERS PVT. LTD.",
        "PROJECT NAME": "BRAHMALOK",
        "REGISTRATION NUMBER": "RP/19/2023/00864"
    },
    {
        "PROMOTER NAME": "VASANTHI STORAGES PVT LTD",
        "PROJECT NAME": "NILADRI NEWTOWN",
        "REGISTRATION NUMBER": "RP/30/2024/01097"
    },
    {
        "PROMOTER NAME": "VASUMATI LIVINGSTYLE LLP",
        "PROJECT NAME": "OM SUNSHINE",
        "REGISTRATION NUMBER": "RP/19/2023/00929"
    },
    {
        "PROMOTER NAME": "Vedas Associates",
        "PROJECT NAME": "Vedas - Hari Om",
        "REGISTRATION NUMBER": "RP/11/2024/01125"
    },
    {
        "PROMOTER NAME": "Vedas Associates",
        "PROJECT NAME": "Vedas - Sky",
        "REGISTRATION NUMBER": "MP/11/2023/01057"
    },
    {
        "PROMOTER NAME": "Vedas Associates",
        "PROJECT NAME": "VEDAS EPARI PLAZA",
        "REGISTRATION NUMBER": "MP/11/2024/01168"
    },
    {
        "PROMOTER NAME": "Vinayak Construction Company",
        "PROJECT NAME": "PREETI ENCLAVE",
        "REGISTRATION NUMBER": "RP/01/2024/01172"
    },
    {
        "PROMOTER NAME": "VISION REACH INFRA PRIVATE LIMITED",
        "PROJECT NAME": "VISION PEARL",
        "REGISTRATION NUMBER": "RP/07/2023/01022"
    },
    {
        "PROMOTER NAME": "VISIONTECH HOMES PRIVATE LIMITED",
        "PROJECT NAME": "YASHAS",
        "REGISTRATION NUMBER": "RP/11/2022/00750"
    },
    {
        "PROMOTER NAME": "VISIONTECH HOMES PRIVATE LIMITED",
        "PROJECT NAME": "GOPALKUNJ",
        "REGISTRATION NUMBER": "RP/11/2022/00764"
    },
    {
        "PROMOTER NAME": "Vittibhumi Projects Private Limited",
        "PROJECT NAME": "Sri Aurobinda Residency",
        "REGISTRATION NUMBER": "RP/19/2020/00361"
    },
    {
        "PROMOTER NAME": "VIVEKANANDA LAND AND BUILDING (P) LTD.",
        "PROJECT NAME": "VIVEKANANDA HERITAGE",
        "REGISTRATION NUMBER": "MP/11/2022/00810"
    },
    {
        "PROMOTER NAME": "VSP DEVELOPPERS",
        "PROJECT NAME": "Sri Sai Venkata Ramana Enclaves",
        "REGISTRATION NUMBER": "RP/20/2021/00624"
    },
    {
        "PROMOTER NAME": "Z Engineers Construction Pvt Ltd",
        "PROJECT NAME": "Z Padmanabha",
        "REGISTRATION NUMBER": "RP/19/2023/00987"
    },
    {
        "PROMOTER NAME": "Z Engineers Construction Pvt Ltd",
        "PROJECT NAME": "Z Rukmini - 10 Forest Park",
        "REGISTRATION NUMBER": "RP/19/2023/00895"
    },
    {
        "PROMOTER NAME": "Z Engineers Construction Pvt Ltd",
        "PROJECT NAME": "Z Magnolia Residency",
        "REGISTRATION NUMBER": "RP/07/2023/00932"
    },
    {
        "PROMOTER NAME": "Z Engineers Construction Pvt Ltd",
        "PROJECT NAME": "The Nest",
        "REGISTRATION NUMBER": "RP/19/2023/00925"
    },
    {
        "PROMOTER NAME": "Zivaah Greens Pvt Ltd",
        "PROJECT NAME": "ZIVAAH FLEMINGO",
        "REGISTRATION NUMBER": "MP/19/2024/01181"
    },
    {
        "PROMOTER NAME": "ZJSH SPV PVT. LTD.",
        "PROJECT NAME": "Consortium Magnum",
        "REGISTRATION NUMBER": "RP/19/2024/01165"
    }

    // Additional entries from your JSON file...
    // The data here is truncated for brevity. Please include all other entries from your file.
];

function checkRERA() {
    const searchQuery = document.getElementById('builderSearch').value.toLowerCase();
    let result = "No result found";

    for (let i = 0; i < reraData.length; i++) {
        if (reraData[i]["PROMOTER NAME"].toLowerCase().includes(searchQuery) || 
            reraData[i]["PROJECT NAME"].toLowerCase().includes(searchQuery)) {
            result = `Promoter: ${reraData[i]["PROMOTER NAME"]}, 
                      Project: ${reraData[i]["PROJECT NAME"]}, 
                      RERA No: ${reraData[i]["REGISTRATION NUMBER"]}`;
            break;
        }
    }

    document.getElementById('reraResult').innerText = result;
}

function calculateScore() {
    const price = document.getElementById('price').value;
    const spaciousness = document.getElementById('spaciousness').value;

    if (price && spaciousness) {
        const score = (spaciousness / price) * 100;
        document.getElementById('result').innerText = `Property score: ${score.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = "Please enter valid details.";
    }
}

function showContent(tab) {
    const contents = document.getElementsByClassName('content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    document.getElementById(tab).classList.add('active');
}
