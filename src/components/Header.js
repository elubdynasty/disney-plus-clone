import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav> 
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href>
                    <img src="/images/home-icon.svg" alt="home"/>
                    <span>HOME</span>
                </a>

                <a href>
                    <img src="/images/search-icon.svg" alt="home" />
                    <span>SEARCH</span>
                </a>

                <a href>
                    <img src="/images/watchlist-icon.svg" alt="home" />
                    <span>WATCHLIST</span>
                </a>

                <a href>
                    <img src="/images/original-icon.svg" alt="home" />
                    <span>ORIGINALS</span>
                </a>

                <a href>
                    <img src="/images/movie-icon.svg" alt="home" />
                    <span>MOVIES</span>
                </a>

                <a href>
                    <img src="/images/series-icon.svg" alt="home" />
                    <span>SERIES</span>
                </a>


            </NavMenu>

            <UserImg src="https://pbs.twimg.com/profile_images/1346946042298654720/vnprDRkd_400x400.jpg"></UserImg>

        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
//background for navbar on homepage (after styled.div w/ backticks/templating)

//Instead of div, put assign a const called 'Nav' powered by styled-components pkg

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    cursor: pointer;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                bottom: -6px;
                right: 0;
                left: 0; 
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0); 
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%
`

//I muted tut audio right a > span > &:after transform: scaleX(0)