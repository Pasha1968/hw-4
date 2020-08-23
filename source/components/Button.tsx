import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Variant = "clear" | "solid";

function delay(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

async function getVariantTextColor(variant: Variant): Promise<string> {
  await delay(1000);

  switch (variant) {
    case "clear":
      return Promise.resolve("#FFFFFF");
    case "solid":
      return Promise.resolve("#EDA231");
  }
}

export type ButtonProps = React.PropsWithChildren<
  React.ComponentProps<typeof TouchableOpacity>
> & {
  variant?: Variant;
};

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  children,
  style,
  ...props
}) => {
  const [textColor, setTextColor] = React.useState<string>();

  React.useEffect(() => {
    let unmounted = false;
    getVariantTextColor(variant).then((color) => {
      if (!unmounted) {
        setTextColor(color);
      }
    });
    return () => {
      unmounted = true;
    };
  }, [variant]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        variant === "clear" ? styles.containerClear : styles.containerSolid,
        style,
      ]}
      {...props}
    >
      <Text style={[styles.text, { color: textColor ?? "black" }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  containerClear: {},
  containerSolid: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontFamily: "Muli_700Bold",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0.02,
  },
});

export default React.memo(Button);
