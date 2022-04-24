import "./topbar.scss"
import { Button } from "@material-ui/core"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Isabella Pires
                    </a>
                    <div className="itemContainer">
                        <Button />
                        <span>32 99818 9261</span>
                    </div>
                </div>
                <h1>Hello</h1>
                <div className="right"></div>
            </div>
        </div>
    )
}
