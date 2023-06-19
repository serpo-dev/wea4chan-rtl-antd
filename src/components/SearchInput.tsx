import { AutoComplete, Button, Form, message } from "antd";
import { useState, useEffect, FC } from "react";
import { getCity } from "../async/getCity";
import { useNavigate } from "react-router-dom";

interface Option {
    label: string;
    value: string;
}

export const SearchInput: FC = () => {
    const [options, setOptions] = useState<Option[] | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    async function handleSearch(value: string) {
        const res = await getCity(value);
        if (res && res.length > 0) {
            const opts = res?.map((e) => {
                return {
                    label: e.name,
                    value: e.latitude + "; " + e.longitude,
                };
            });
            setOptions(opts);
        }
    }

    function onFinish({ value }: { value: string }) {
        if (value) {
            const trimmedValue = value.trim();

            const regex = /-{0,}\d+\.\d+;.{0,}-{0,}\d+/;
            const match = trimmedValue.match(regex);

            if (match?.[0] !== trimmedValue) {
                setError(`You need to enter the coordinates in format "x; y"`);
                return;
            }

            const coordinates = trimmedValue.split(";");
            const city = options?.filter((e) => e.value === trimmedValue)[0][
                "label"
            ];
            navigate(
                `/q?latitude=${coordinates[0].trim()}&longitude=${coordinates[1].trim()}${
                    city ? "&city=" + city?.trim() : ""
                }`
            );
            return;
        }
        return;
    }

    useEffect(() => {
        if (error !== null) {
            messageApi.open({ type: "error", content: error });
            setError(null);
        }
    }, [error, messageApi]);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {contextHolder}
            <Form
                form={form}
                layout="horizontal"
                onFinish={onFinish}
                style={{ display: "flex", flexDirection: "row" }}
            >
                <Form.Item name="value">
                    <AutoComplete
                        size="large"
                        style={{
                            width: 400,
                        }}
                        onSearch={handleSearch}
                        placeholder="Search for coordinates..."
                        options={options}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        title="Search button"
                        size="large"
                        type="primary"
                        htmlType="submit"
                    >
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
