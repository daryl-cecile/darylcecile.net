"use client";

import Anchor from "../../../components/Anchor";
import InfoBox from "../../../components/InfoBox";

export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    return (
        <InfoBox type="error" preText="Something went wrong!">
            <Anchor onClick={() => reset()}>Retry</Anchor>
        </InfoBox>
    );
}