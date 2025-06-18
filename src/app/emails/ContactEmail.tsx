import {
  Html,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

export function ContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Container
        style={{ fontFamily: "Arial, sans-serif", color: "#222", padding: 24 }}
      >
        <Section>
          <Heading as="h2" style={{ color: "#5A8C4A" }}>
            New Contact Message
          </Heading>
        </Section>
        <Section>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong>
          </Text>
          <Section
            style={{
              background: "#f6f6f6",
              padding: 16,
              borderRadius: 8,
              marginTop: 8,
            }}
          >
            <Text>{message}</Text>
          </Section>
        </Section>
        <Hr
          style={{
            margin: "32px 0",
            border: "none",
            borderTop: "1px solid #eee",
          }}
        />
        <Text style={{ fontSize: 14, color: "#888" }}>
          Secofet Trading PLC Website Contact Form
        </Text>
      </Container>
    </Html>
  );
}
