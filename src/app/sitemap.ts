import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.cloudvandexa.com";

    return [
        { url: `${baseUrl}/`, lastModified: new Date() },

        { url: `${baseUrl}/about-us`, lastModified: new Date() },
        { url: `${baseUrl}/careers`, lastModified: new Date() },
        { url: `${baseUrl}/contact-us`, lastModified: new Date() },

        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/services/aws`, lastModified: new Date() },
        { url: `${baseUrl}/services/java`, lastModified: new Date() },
        { url: `${baseUrl}/services/salesforce`, lastModified: new Date() },
        { url: `${baseUrl}/services/servicenow`, lastModified: new Date() },
        { url: `${baseUrl}/services/resource-augmentation`, lastModified: new Date() },
        { url: `${baseUrl}/services/website-development`, lastModified: new Date() },

        { url: `${baseUrl}/industries`, lastModified: new Date() },
        { url: `${baseUrl}/industries/education`, lastModified: new Date() },
        { url: `${baseUrl}/industries/health-and-pharma`, lastModified: new Date() },
        { url: `${baseUrl}/industries/manufacturing`, lastModified: new Date() },
        { url: `${baseUrl}/industries/non-profit`, lastModified: new Date() },
        { url: `${baseUrl}/industries/real-estate`, lastModified: new Date() },
        { url: `${baseUrl}/industries/travel-and-hospitality`, lastModified: new Date() },
    ];
}
