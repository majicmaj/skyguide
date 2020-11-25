import netlifyIdentity from "netlify-identity-widget";

export const login = () => {
    if (netlifyIdentity && netlifyIdentity.currentUser()) {
        return netlifyIdentity.currentUser()
    }
}