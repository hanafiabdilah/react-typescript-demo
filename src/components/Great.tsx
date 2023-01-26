type GreatProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

export const Great = ({ name, messageCount = 0, isLoggedIn }: GreatProps) => {
    return (
        <div>
            <h2>
                {isLoggedIn ? ` Welcome ${name}! You have ${messageCount} unread messages` : 'Welcome Guest'}
            </h2>
        </div>
    )
}