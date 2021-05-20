import React from "react";
import {
  Word as SpeechWord,
  SpeechSegment,
  SpeechState,
} from "@speechly/react-client";

type Props = {
  segment?: SpeechSegment;
  state: SpeechState;
  onRecord: () => Promise<void>;
};

export const Microphone = React.memo(
  ({ state, segment, onRecord }: Props): JSX.Element => {
    let enabled = false;
    let text = "Error";

    switch (state) {
      case SpeechState.Idle:
      case SpeechState.Ready:
        enabled = true;
        text = "Voice";
        break;
      case SpeechState.Recording:
        enabled = true;
        text = "Stop";
        break;
      case SpeechState.Connecting:
      case SpeechState.Loading:
        enabled = false;
        text = "Loading...";
        break;
    }

    return (
      <div className="block">
        <button style={{width: '85px', backgroundColor: '#5A8E22', border: '1px solid #999', color: 'white', padding: '8px'}} onClick={onRecord} disabled={!enabled}>
          {text}
        </button>
        <Transcript segment={segment} />
      </div>
    );
  }
);

const Transcript = React.memo(
  ({ segment }: { segment?: SpeechSegment }): JSX.Element => {
    if (segment === undefined) {
      return (
        <div style={{fontSize: '11px'}}>
          <em>Waiting for speech input...</em>
        </div>
      );
    }

    return (
      <div style={{fontSize: '11px', color: '#5a8e22'}}>
        {segment.words.map((w) => (
          <Word word={w} key={w.index} />
        ))}
      </div>
    );
  }
);

const Word = React.memo(
  ({ word }: { word: SpeechWord }): JSX.Element => {
    if (word.isFinal) {
      return <strong>{`${word.value} `}</strong>;
    }

    return <span>{`${word.value} `}</span>;
  }
);
