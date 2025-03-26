export const users = new Map();

export function seedUserStore() {
    users.set('scotti@cesul.com.br', {
        password: '123456'
    });
}
