import {
    Box,
    Container,
    FormControlLabel,
    FormGroup,
    Grid,
    Stack,
    Typography,
    Button,
    MenuItem,
    ListItemIcon,
    Menu,
    Card,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { alpha, styled, useTheme } from '@mui/material/styles'
import { pink } from '@mui/material/colors'
import ReactCountryFlag from 'react-country-flag'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useTranslation } from 'react-i18next'
import { CustomSwitch, TopBarButton } from '../../navbar/Navbar.style'
import { useSelector } from 'react-redux'
import { StyledMenu } from '../../navbar/top-navbar/TopNav.style'
import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '../../../styled-components/CustomStyles.style'
import Meta from '../../Meta'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff'
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff'
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}))

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(
                pink[600],
                theme.palette.action.hoverOpacity
            ),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}))

const label = { inputProps: { 'aria-label': 'Switch demo' } }
const SettingPage = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState(null)
    const [theme_mode, setThemeMode] = useState('')
    const [language, setLanguage] = useState('')
    const [langvalue, setLangValue] = useState()
    const { global } = useSelector((state) => state.globalSettings)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    // console.log("global",langvalue)
    useEffect(() => {
        // Perform localStorage action
        if (typeof window !== 'undefined') {
            setThemeMode(localStorage.getItem('mode') || 'light')
        }
    }, [theme_mode])
    useEffect(() => {
        // Perform localStorage action
        if (typeof window !== 'undefined') {
            setLanguage(localStorage.getItem('language') || 'en')
            setLangValue(localStorage.getItem('lanValue')|| 'en')
        }
    }, [language])

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const changeThemeMode = (e) => {
        if (e.target.checked) {
            localStorage.setItem('mode', 'light')
        } else {
            localStorage.setItem('mode', 'dark')
        }
        window.location.reload()
    }
    const handleLanguage = (ln) => {
        // setLanguage(ln)
        localStorage.setItem('language', ln)
        if (ln === 'ar') {
            // if (typeof window !== 'undefined') {
            localStorage.setItem('direction', 'rtl')
            // window.relo
            //  }
        } else {
            //  if (typeof window !== 'undefined') {
            localStorage.setItem('direction', 'ltr')
            //   }
        }
        window.location.reload()
    }

    const lanColor = theme.palette.neutral[1000]
    return (
        <>
            {' '}
            <Meta
                title={` My Settings-${global?.business_name}`}
                description=""
                keywords=""
            />
            <CustomPaperBigCard padding="3rem" sx={{ minHeight: '55vh' }}>
                <Grid container spacing={2}>
                    {/* <Grid item md={4} xs={12}>
                        <Card
                            sx={{
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                maxWidth: '247px',
                                height: '168px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                backgroundColor: (theme) =>
                                    theme.palette.cardBackground1,
                            }}
                        >
                            <CustomStackFullWidth spacing={2}>
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        textAlign: 'center',
                                    }}
                                >
                                    {theme_mode === 'light'
                                        ? t('Light Mode')
                                        : t('Dark Mode')}
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                        control={
                                            <CustomSwitch
                                                {...label}
                                                sx={{ m: 1 }}
                                                checked={theme_mode === 'light'}
                                                onChange={changeThemeMode}
                                            />
                                        }
                                        label=""
                                    />
                                </FormGroup>
                            </CustomStackFullWidth>
                        </Card>
                    </Grid> */}
                    {/*<Grid item md={4} xs={12}>*/}
                    {/*    <Card*/}
                    {/*        sx={{*/}
                    {/*            // background: '#FBFBFB',*/}
                    {/*            borderRadius: '10px',*/}
                    {/*            display: 'flex',*/}
                    {/*            alignItems: 'center',*/}
                    {/*            maxWidth: '247px',*/}
                    {/*            height: '168px',*/}
                    {/*            marginLeft: 'auto',*/}
                    {/*            marginRight: 'auto',*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <Container>*/}
                    {/*            <Typography*/}
                    {/*                sx={{*/}
                    {/*                    fontSize: '18px',*/}
                    {/*                    fontWeight: '700',*/}
                    {/*                    textAlign: 'center',*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                {t('Notification')}*/}
                    {/*            </Typography>*/}
                    {/*            <Container*/}
                    {/*                sx={{ display: 'flex', justifyContent: 'center' }}*/}
                    {/*            >*/}
                    {/*                <Switch {...label} defaultChecked color="warning" />*/}
                    {/*            </Container>*/}
                    {/*        </Container>*/}
                    {/*    </Card>*/}
                    {/*</Grid>*/}
                    <Grid item md={4} xs={12}>
                        <Card
                            sx={{
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                maxWidth: '247px',
                                height: '168px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                backgroundColor: (theme) =>
                                    theme.palette?.cardBackground1,
                            }}
                        >
                            <CustomStackFullWidth
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        textAlign: 'center',
                                    }}
                                >
                                    {t('Language')}
                                </Typography>

                                {/* <ButtonGroup
                                size="small"
                                // variant="text"
                                aria-label="top button group"
                                >
                                </ButtonGroup> */}

                                <TopBarButton
                                    // id="demo-customized-button"
                                    variant="text"
                                    size="small"
                                    aria-controls={
                                        open
                                            ? 'demo-customized-menu'
                                            : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    disableElevation
                                    onClick={handleClick}
                                    startIcon={
                                        <ReactCountryFlag
                                            countryCode={
                                                language === 'en' ? 'US' : language === 'ta' ? 'IN' : language
                                            }
                                            svg
                                        />
                                    }
                                    endIcon={<KeyboardArrowDownIcon />}
                                    sx={{
                                        color: '#E91E63'
                                    }}
                                >
                                    <span
                                        style={{
                                            padding: '0 10px',
                                            color: lanColor,
                                        }}
                                    >
                                        {language === 'en'
                                            ? 'English'
                                            : langvalue}
                                    </span>
                                </TopBarButton>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                        'aria-labelledby':
                                            'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    {global?.language?.map((lan, index) => (
                                        <MenuItem
                                            onClick={() => {
                                                handleLanguage(lan.key);
                                                localStorage.setItem("lanValue",lan.value)
                                            }
                                            }
                                            disableRipple
                                            key={index}
                                        >
                                            <ListItemIcon>
                                                <ReactCountryFlag
                                                    countryCode={
                                                        lan.key === 'en'
                                                            ? 'US'
                                                            : lan.key == 'ta' ? 'IN' : lan.key
                                                    }
                                                    svg
                                                />
                                            </ListItemIcon>
                                            {lan.value}
                                        </MenuItem>
                                    ))}
                                </StyledMenu>
                            </CustomStackFullWidth>
                        </Card>
                    </Grid>
                </Grid>
            </CustomPaperBigCard>
        </>
    )
}

export default SettingPage
