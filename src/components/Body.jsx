import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card({ id, icon, title, description, url }) {
    return <div
        className="card"
        id={id}
    >

        <div className="card-icon-container">
            <FontAwesomeIcon icon={icon} />
        </div>
        <div className="card-text-container">
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
        </div>

    </div>
}

export default function Body() {
    return <div className="body">
        <div className="card-container">
            <Card
                id="github"
                icon={faGithub}

                title="Github"
                description="Place where i publish my projects (don't look)"
                url="https://www.github.com/sysfab"
            />
            <Card
                id="discord"
                icon={faDiscord}

                title="@sysfab"
                description="Replying as soon as possible!"
            />
            <Card
                id="support"
                icon={faHeart}

                title="Support me"
                description="You can support me with donation :3"
                url="https://donatello.to/sysfab"
            />

            <div className="spacer" style={{ flex: '1' }}></div>

            <div className="welcome">
                <p>Coding, Playing, Sleeping</p>
                <p>🇺🇦 Ukraine</p>
            </div>
        </div>
    </div>
}
