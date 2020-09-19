import { Container, Link, Typography } from "@material-ui/core"
import React from "react"


export default ({company, }) => {
    console.log(company)
    return (
        <div>
            <Typography variant="h6">{company.position}</Typography>
            <Typography>
                <Link underline='always' color='textPrimary' href={company.companyLink}>AjaxSystems</Link> | {company.dataWork}
            </Typography>
        </div>
    )
}