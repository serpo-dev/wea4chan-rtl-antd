import { FC } from "react";
import { Button, Result } from "antd";

export const NotFound: FC = () => {
    return (
        <Result
            status="404"
            title="404 Not found"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
        />
    );
};
