
export const GameButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
    return (
        <button
            className="bg-bh-dgray p-3 rounded-full hover:bg-bh-dgray cursor-pointer"
            onClick={onClick}>
            {children}
        </button>
    )
}
