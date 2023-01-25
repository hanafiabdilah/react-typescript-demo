type GreatProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,
}

export const Great = (props: GreatProps) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn ? ` Welcome ${props.name}! You have ${props.messageCount} unread messages` : 'Welcome Guest'}
            </h2>
        </div>
    )
}