import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";

import Image from "next/image";
import whoIsTheCoon from "/public/whoisthecoon.png";

// Top navbar
export default function Navbar() {
	const { user, username } = useContext(UserContext);

	const router = useRouter();

	const signOut = () => {
		auth.signOut();
		router.reload();
	};

	return (
		<nav className='navbar'>
			<ul>
				<li>
					<Link href='/' passHref>
						<button className='btn-logo'>FEED</button>
					</Link>
				</li>

				{/* user is signed-in and has username */}
				{username && (
					<>
						<li className='push-left'>
							<button onClick={signOut}>Sign Out</button>
						</li>
						<li>
							<Link href='/admin' passHref>
								<button className='btn-blue'>Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`} passHref>
								<Image
									src={user?.photoURL || whoIsTheCoon}
									alt={"logo"}
									width={60}
									height={60}
								/>
							</Link>
						</li>
					</>
				)}

				{/* user is not signed OR has not created username */}
				{!username && (
					<li>
						<Link href='/enter' passHref>
							<button className='btn-blue'>Log in</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
