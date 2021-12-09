import React, {useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import { BrowserRouter, Route } from 'react-router-dom'
import "./layout.css"
import TopNav from '../topnav/TopNav'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from "../../redux/actions/ThemeAction"
const Layout = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <div>
            <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
            </BrowserRouter>

        </div>
    )
}

export default Layout
