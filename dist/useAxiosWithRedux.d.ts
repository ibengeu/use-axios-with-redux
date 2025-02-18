import { AxiosRequestConfig } from "axios";
import { NetworkRequestType, ReduxConfigType } from "./types";
declare const useAxiosWithRedux: <RequestDataType, ResponseDataType>(url: string, reduxConfig: ReduxConfigType, config?: AxiosRequestConfig | undefined) => NetworkRequestType<RequestDataType, ResponseDataType>;
export default useAxiosWithRedux;
