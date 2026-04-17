import { Button } from "../react/Button.tsx";
import { LinkedInIcon } from "../icons/contact/index.tsx";

export const LinkedInButton = ({ style }: { style?: boolean }) => {
  const showLinkedin =
    String(import.meta.env.PUBLIC_SHOW_LINKEDIN).toLowerCase() === "true";

  return (
    showLinkedin && (
      <Button
        style={
          style
            ? {
                marginTop: "10px",
                width: "120px",
                borderColor: "#ff7ab6",
                boxShadow: "inset 0px -2px 0px 1px #ff7ab6",
              }
            : undefined
        }
        href="https://www.linkedin.com/in/keilin-escobar-01045032a/"
        text="LinkedIn"
      >
        <LinkedInIcon className="w-5 h-5" />
      </Button>
    )
  );
};
// {
//           marginTop: "10px",
//           width: "120px",
//           borderColor: "#ff7ab6",
//           boxShadow: "inset 0px -2px 0px 1px #ff7ab6",

//         }
