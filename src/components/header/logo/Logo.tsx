type LogoProps = {
    device: 'mobile' | 'desktop'
}

export default function Logo({ device }: LogoProps) {
    return device === 'mobile' ? (
        <div className="mobile">
            <img src="/logo.png" alt="T1 on Tour Logo" />
        </div>
    ) : (
        <div className="desktop">
            <img src="/logo.png" alt="T1 on Tour Logo" />
        </div>
    )
}