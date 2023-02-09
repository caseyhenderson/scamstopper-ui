export default function ScamstopperWidget() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
        <df-messenger
          df-cx="true"
          location="europe-west2"
          chat-title="Scamstopper!"
          agent-id="a8fa35b4-5082-4d55-acb5-75ac2122516a"
          language-code="en"
        ></df-messenger>
      ` }} />
    )
}