export default function ScamstopperFullScreen() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
        <df-messenger
          df-cx="true"
          location="europe-west2"
          expand="open"
          chat-icon="https://storage.cloud.google.com/dialogflow-fyp-resources/scamstopper-widget-2.png"
          chat-title="Scamstopper!"
          agent-id="a8fa35b4-5082-4d55-acb5-75ac2122516a"
          language-code="en"
        ></df-messenger>
      ` }} />
    )
}