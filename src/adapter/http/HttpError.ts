export class HttpError {
    private error: string;
    
    constructor(error: string){
        this.error = error;
    }
    public getError(): string{
        return this.error;
    }
}