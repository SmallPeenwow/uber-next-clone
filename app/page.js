import tw from 'tailwind-styled-components';
import Map from './components/Map';
import profilePic from '../public/images/spenser-sembrat-zJ-s2wl2kp8-unsplash.jpg';

export default function Home() {
	return (
		<Wrapper>
			<Map />
			<ActionItems>
				{/* Header */}
				<Header>
					<UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />

					<Profile>
						<Name>Peen Dev</Name>
						<UserImage src={profilePic} />
					</Profile>
				</Header>

				{/* ActionButtons */}
				<ActionButtons>
					<ActionButton>
						<ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
						Ride
					</ActionButton>
					<ActionButton>Wheels</ActionButton>
					<ActionButton>Reserve</ActionButton>
				</ActionButtons>

				{/* InputButton */}
			</ActionItems>
		</Wrapper>
	);
}

const Wrapper = tw.main`
	flex flex-col h-screen
`;

const ActionItems = tw.div`
	flex-1 p-4
`;

const Header = tw.div`
	flex justify-between items-center
`;

const UberLogo = tw.img`
	h-28
`;

const Profile = tw.div`
 	flex items-center
`;

const Name = tw.div`
	mr-4 w-20 text-sm
`;

const UserImage = tw.img`
	h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionButtons = tw.div`
	flex
`;

const ActionButton = tw.div`
	bg-gray-200 flex-1 m-1 h-32
`;

const ActionButtonImage = tw.img`
	h-3/5
`;
