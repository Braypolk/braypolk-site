const items = [
    {
        company: "Maven Wave",
        date: "June 2021 - Present",
        title: "DevOps Analyst",
        points: [
            "Worked with Capital One to re-platform infrastructure of acquired company. Ensuring security, stability, minimal down time, and compliance with organization",
            "Major role in deployment and improvement of multi-tenant, HITRUST environments for Mayo Clinic. Requiring deep understanding of large scale terraform deployment, organizational policies, and the ability to pivot based on customer needs."
        ]
    },
    {
        company: "Yellowstone Ecological Research Center",
        date: "September - May 2020",
        title: "Computer Science Intern, Senior Capstone Team",
        points: [
            "Developing machine learning model based on statistical analysis to forecast watershed information through sensors and geographic information systems (GIS).",
            "Created structured database storing rationalized data to easily display analysis for interactive webservice."
        ]
    },
    {
        company: "Zoot Enterprises",
        date: "June - August 2020",
        title: "Computer Science Intern, Microservices Team",
        points: [
            "Collaborated with technical leads, technical writers, and other developers to create attributes based on  specifications created from software architects.",
            "Audited attributes other developers created to ensure complete compatibility with the entire system.",
            "Configured connections to data providers through company software."
        ]
    },
    {
        company: "Nextworld",
        date: "May - July 2019",
        title: "Computer Science Intern, Integration & Implementation Team",
        points: [
            "Developed the full stack of a website to train customers on various functionality of Nextworld's enterprise platform; presented to company executives, including the CEO, using PowerPoint and a live demonstration.",
            "Built strong relationships with other teams and departments, which was critical to implementing projects on-time.",
            "Integrated cross-reference functionality for general ledger accounts in partnership with finance."
        ]
    },
    {
        company: "Bray Polkinghorne Enterprises",
        date: "2017 - 2021",
        title: "Sole Proprietorship",
        points: [
            "Setup business and created website to showcase my photography at farmers' markets.",
            "Used as a tool to learn and expand my knowledge of different technologies like ReactJS, NodeJS, MongoDB, and GCP"
        ]
    }
]

function Experience() {
    return (
        <>
            {items.map(function (object, i) {
                return (
                    <div className="block">
                        <div className="info allCenter">
                            <div className="headingInfo spaceRight">
                                <h2 className="company bigBreath">{object.company}</h2>
                                <p className="date breath">{object.date}</p>
                                <p className="title breath">{object.title}</p>
                            </div>
                            <div className="box breath">
                                <ul className="jobPoints">
                                    {object.points.map(function (o, z) {
                                        return (
                                            <li key={z}>{o}</li>
                                        )
                                    })} 
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Experience;
