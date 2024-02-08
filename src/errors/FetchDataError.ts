class FetchDataError extends Error {
    constructor(props: string) {
        super(props)
        this.name = 'FetchDataError'
    }
}

export default FetchDataError