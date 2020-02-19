export default [
  {
    group: 'Box',
    name: 'Responsive padding',
    code: `
    <Box background="secondary" padding={["small", "medium", "xxlarge"]}>
      <Placeholder height={100} />
    </Box>
    `,
  },
  {
    group: 'Button',
    name: 'Default',
    code: `<Button>Press Me</Button>`,
  },
  {
    group: 'Button',
    name: 'Strong',
    code: `<Button weight="strong">Press Me</Button>`,
  },
  {
    group: 'Button',
    name: 'Weak',
    code: `<Button weight="weak">Press Me</Button>`,
  },
  {
    group: 'Layout',
    name: 'Product list',
    code: `
    <Stack align="center" paddingY={["gutter", "medium", "large"]}>
    <Text heading size="xlarge">
      Nice Stuff
    </Text>
    <ScrollBox>
      <Inline space="smallish" paddingX="small">
        {[
          "Puppies",
          "Kittens",
          "Chonkers",
          "Snuggles",
          "Candy",
          "Derpy Dogs"
        ].map(item => (
          <Button weight="weak" size="small">
            {item}
          </Button>
        ))}
      </Inline>
    </ScrollBox>
  </Stack>
  <Divider />
  <ContentBlock paddingY="large" paddingX={["none", "gutter"]}>
    <Columns cols={[1, 5]}>
      <Column span={1} display={["none", "block"]}>
        <Stack>
          <Text tone="secondary">6 items</Text>
          <Text heading size="standard">
            Nice Stuff
          </Text>
          <Stack as="ul">
            {[
              "Puppies",
              "Kittens",
              "Chonkers",
              "Snuggles",
              "Candy",
              "Derpy Dogs"
            ].map(item => (
              <Text as="li">{item}</Text>
            ))}
          </Stack>
        </Stack>
      </Column>
      <Column span={4}>
        <Columns cols={[2, 2, 3]} colGap={["xxsmall", "gutter"]}>
          {[237, 1025, 1074, 239, 169, 200].map(i => (
            <Stack space="smallish">
              <Image
                src={\`https://picsum.photos/id/\${i}/400/500\`}
                width={4}
                height={5}
                fluid
              />
              <Stack
                space="smallish"
                paddingBottom="gutter"
                paddingX={["xsmall", "none"]}
              >
                <Text size="standard" weight="medium">
                  Cute Pet {i}
                </Text>
                <Text>$100</Text>
              </Stack>
            </Stack>
          ))}
        </Columns>
      </Column>
    </Columns>
  </ContentBlock>
    `,
  },
]
