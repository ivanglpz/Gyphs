import styled from '@emotion/styled'
import { FC } from 'react'
import NavMenu from '../components/NavMenu/NavMenu'

const MainApp = styled.main`
    display: flex;
`
const MainBody = styled.div`
    margin:10px 0 0 250px;
`

const Settings: FC = () => {
    return (
        <MainApp>
            <NavMenu />
            <MainBody>
                <h1>Settings</h1>
                <form action="">
                    <div>
                        <label htmlFor="dark">Dark</label>
                        <input type="radio" name="theme" id="dark" value="dark" />
                    </div>
                    <div>
                        <label htmlFor="light">Light</label>
                        <input type="radio" name="theme" id="light" value="light" />
                    </div>
                </form>
            </MainBody>
        </MainApp>
    )
}

export default Settings
