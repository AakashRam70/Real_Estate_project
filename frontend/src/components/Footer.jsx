import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constant/data'

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Explore real estate opportunities with us?</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab modi blanditiis error velit? Veritatis iste numquam non quos. At autem, inventore pariatur perferendis as</p>
                <hr />
                {/* container */}
                <div>
                    <div>
                        <Link to={'/'}><span className='font-[900] text-[24px]'>Aakash<span className='font-[600] medium-20'>Territory</span></span></Link>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quos sunt recusandae quibusdam minus voluptate laudantium sint ut. Libero cupiditate cumque maiores sequi earum, iste saepe ea rem distinctio voluptatibus autem placeat.</p>
                        <div className='flexBetween pl-6 h-[3.3rem] bg-white w-full max-w-[366px] rounded-full ring-1 ring-slate-500/5'>
                            <input type="email" placeholder='Enter Your Email' className='bg-transparent border-none outline-none' />
                            <button className='btn-secondary rounded-full relative right-[0.33rem] '>Subscribe</button>
                        </div>
                    </div>
                    <div>
                        {FOOTER_LINKS.map((col) => (
                            <FooterColumn key={col.title} title={col.title}>
                                <ul>
                                    {col.links.map((link) => (
                                        <Link to={'/'} key={link}>{link}</Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}
                        <div>
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link to={'/'} key={link.label}>
                                        <p>{link.label}</p>: <p>{link.value}</p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>
                        <div>
                            <FooterColumn title={SOCIALS.title}>
                                <ul>
                                    {SOCIALS.links.map((link) => (
                                        <Link to={'/'} key={link.id}>{link.icon}</Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <p><span>2024 AakashProperties</span>All rights reserved</p>
        </footer>
    )
}

export default Footer;

const FooterColumn = ({ title, children }) => {
    return (
        <div className=''>
            <h4>{title}</h4>
            {children}
        </div>
    )
}