import Icon from "./Icon.jsx";
import { useEffect, useRef, useState } from "react";

export function Card({ id, icon, title, description, url, onClick, label, copied }) {
    const content = (
        <>
            <span className="card-icon-container">
                <Icon name={icon} />
            </span>

            <span className="card-text-container">
                <span className="card-title">{title}</span>
                <span className="card-description">{description}</span>
            </span>
        </>
    );

    if (onClick) {
        return (
            <button type="button" className={`card${copied ? " is-copied" : ""}`} id={id} onClick={onClick} aria-label={label}>
                {content}
            </button>
        );
    }

    if (url) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                id={id}
            >
                {content}
            </a>
        );
    }

    return (
        <div className="card" id={id}>
            {content}
        </div>
    );
}

export default function Body() {
    const [copyStatus, setCopyStatus] = useState("");
    const resetTimer = useRef(null);

    useEffect(() => () => clearTimeout(resetTimer.current), []);

    async function copyDiscordUsername() {
        clearTimeout(resetTimer.current);

        try {
            await navigator.clipboard.writeText("sysfab");
            setCopyStatus("Copied!");
        } catch {
            setCopyStatus("Couldn't copy. Select and copy @sysfab manually.");
        }

        resetTimer.current = setTimeout(() => setCopyStatus(""), 4000);
    }

    return <div className="body">
        <div className="card-container">
            <Card
                id="github"
                icon="github"

                title="Github"
                description="Place where i publish my projects (don't look)"
                url="https://www.github.com/sysfab"
            />
            <Card
                id="discord"
                icon="discord"

                title="@sysfab"
                description={
                    <span className="discord-feedback">
                        <span className={`discord-hint${copyStatus ? " is-hidden" : ""}`} aria-hidden={!!copyStatus}>
                            Click to copy my Discord username
                        </span>
                        <span className={`copy-status${copyStatus ? " is-visible" : ""}`} role="status" aria-atomic="true">
                            {copyStatus === "Copied!" ? <>
                                <Icon name="check" className="copy-check" />
                                Username copied!
                            </> : copyStatus}
                        </span>
                    </span>
                }
                onClick={copyDiscordUsername}
                label="Copy Discord username sysfab"
                copied={copyStatus === "Copied!"}
            />
            <Card
                id="support"
                icon="heart"

                title="Support me"
                description="You can support me with donation :3"
                url="https://donatello.to/sysfab"
            />

            <div className="spacer" style={{ flex: '1' }}></div>

            <footer className="welcome" aria-label="About sysfab">
                <p className="footer-interests">
                    <span>Coding</span>
                    <span className="footer-separator" aria-hidden="true">/</span>
                    <span>Playing</span>
                    <span className="footer-separator" aria-hidden="true">/</span>
                    <span>Sleeping</span>
                </p>
                <p className="footer-location">
                    <span className="ukraine-flag" aria-hidden="true" />
                    Ukraine
                </p>
            </footer>
        </div>
    </div>
}
