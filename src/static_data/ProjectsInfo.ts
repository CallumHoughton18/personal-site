import { IconWithLinks } from "@/components/types";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faMobile } from "@fortawesome/free-solid-svg-icons";

type ProjectInfo = {
  title: string;
  desc: string;
  tech: string[];
  links: IconWithLinks[];
};

const ProjectInfo = (): ProjectInfo[] => {
  return [
    {
      title: "XLSX Data Extractor",
      desc:
        "A WPF application built to demonstrate the data extraction capabilities of the XLSX Data Extractor library, which is built on top of OpenXML. The application allows mass data extraction from a collection of XLSX reports",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/CallumHoughton18/XLSXBulkDataExtractor",
          style: "mr-5",
        },
      ],
      tech: ["C#", "WPF", "ClosedXML", "Azure Pipelines"],
    },
    {
      title: "Mushroom Classifier",
      desc:
        "A web app using a Python Flask backend and a TypeScript ReactJS frontend to expose a machine learning model to classify whether a given mushroom is edible or not. Deployed to a VPS using Docker and Jenkins.",
      links: [
        {
          icon: faGithub,
          link:
            "https://github.com/CallumHoughton18/Mushroom-Classification-Front-End",
          style: "mr-5",
        },
        {
          icon: faGithub,
          link: "https://github.com/CallumHoughton18/Mushroom-Classification",
          style: "mr-5",
        },
        {
          icon: faGithub,
          link:
            "https://github.com/CallumHoughton18/Mushroom-Classification-Deployment",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link: "https://mushroomai.site/",
          style: "",
        },
      ],
      tech: ["Python", "Flask", "ReactJS", "TypeScript", "Docker", "Jenkins"],
    },
    {
      title: "Pi Rover Bot",
      desc:
        "A Raspberry Pi Rover Bot that allows a mobile app (built using Xamarin.Forms) to communicate with a web API, built using Python and Django, to control the Pi's GPIO pins",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/CallumHoughton18/PiRoverController",
          style: "mr-5",
        },
        {
          icon: faGithub,
          link: "https://github.com/CallumHoughton18/PiRoverWebServer",
          style: "mr-5",
        },
        {
          icon: faYoutube,
          link: "https://www.youtube.com/watch?v=dnlcQPna3ew",
          style: "",
        },
      ],
      tech: ["Python", "Django", "C#", "Xamarin", "Azure Pipelines"],
    },
    {
      title: "Local Crimes Map",
      desc:
        "A Python Django project that displays crime data from the data.police.uk RESTful API on a map, and as a report style breakdown. The crime data from the report style breakdown is then saved in a PostGIS",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/CallumHoughton18/Local-Crimes-Map",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link: "https://localcrimesmap.herokuapp.com/",
          style: "",
        },
      ],
      tech: ["Python", "Django", "JavaScript", "Postgres"],
    },
    {
      title: "ChemViewAR",
      desc:
        "Allows the viewing of molecular models (sourced from ChemTube3D and the Protein Data Bank) in augmented reality, the models are converted from standard chemical file formats. Built using Unity and ARCore.",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/CallumHoughton18/ChemViewAR",
          style: "mr-5",
        },
        {
          icon: faMobile,
          link:
            "https://play.google.com/store/apps/details?id=com.Callum.ChemViewAR",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link:
            "https://medium.com/@callumhoughton18/creating-ar-ready-models-from-chemical-file-formats-cc8b927e5339",
        },
      ],
      tech: ["C#", "Unity", "Arcore", "Blender"],
    },
  ];
};

export default ProjectInfo;
