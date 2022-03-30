import { Dispatch, SetStateAction } from "react";

export type PageBarTypes = {
    page?:number;
    setPage?:Dispatch<SetStateAction<number>>;
}