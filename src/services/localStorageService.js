const localStorageService = {
    get(key, defaultValue = null) {
        try {
            const value = localStorage.getItem(key)
            return value !== null ? JSON.parse(value) : defaultValue
        } catch (error) {
            console.error(`Error getting localStorage key "${key}":`, error)
            return defaultValue
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error)
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error(`Error removing localStorage key "${key}":`, error)
        }
    },

    clear() {
        try {
            localStorage.clear()
        } catch (error) {
            console.error(`Error clearing localStorage:`, error)
        }
    }
}

export default localStorageService
