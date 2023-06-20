import { Button, Result } from "antd";
import { FC } from "react";

export const ServerError: FC = () => (
    <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong"
        extra={<Button type="primary">Back Home</Button>}
    />
);
