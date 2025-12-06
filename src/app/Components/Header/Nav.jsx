import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
	return (
		<ul className="cs_nav_list fw-medium">
			<li>
				<Link href="/">Home</Link>
			</li>
			<li className="menu-item-has-children">
				<Link href="/about">About us</Link>
				<DropDown>
					<ul>
						<li>
							<Link
								href="/team"
								onClick={() => setMobileToggle(false)}
							>
								Our Team
							</Link>
						</li>
						{/* <li>
              <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li> */}
						<li>
							<Link
								href="/faq"
								onClick={() => setMobileToggle(false)}
							>
								Faq
							</Link>
						</li>
					</ul>
				</DropDown>
			</li>

			<li>
				<Link href="/product" onClick={() => setMobileToggle(false)}>
					Products
				</Link>
			</li>
			<li>
				<Link href="./SunriseCompanyProfilev.4.2.pdf" target="_blank" onClick={() => setMobileToggle(false)}>
					Broucher
				</Link>
			</li>
			{/*
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>      
       <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>
            <li>
              <Link href="/blog-left-sidebar" onClick={() => setMobileToggle(false)}>
              Blog Left Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
			<li>
				<Link href="/blog" onClick={() => setMobileToggle(false)}>
					Blog
				</Link>
			</li>
      <li>
				<Link href="/contact" onClick={() => setMobileToggle(false)}>
					Contact
				</Link>
			</li>
		</ul>
	);
}
