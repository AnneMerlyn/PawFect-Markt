export type CardWrapperProps = {
    children: React.ReactNode;
    cardTitle: string;
    backButtonHref: string;
    backButtonLabel: string;
    showSocials?: boolean;
};

export type BackButtonType = {
    href: string;
    label: string;
};
