import HalfImageSection from "./HalfImage";

const PropertyItem =() =>{
    return(
        <>
        <HalfImageSection
              title="What Makes Us Your Ideal Real Estate Partner?"
              description="Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction."
              imageSrc="https://via.placeholder.com/400x300"
              buttonCaption="Contact Us"
              imagePosition="right"
            />
            <HalfImageSection
              title="What Makes Us Your Ideal Real Estate Partner?"
              description="Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction."
              imageSrc="https://via.placeholder.com/400x300"
              buttonCaption="Contact Us"
              imagePosition="left"
            />
            <HalfImageSection
              title="What Makes Us Your Ideal Real Estate Partner?"
              description="Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction."
              imageSrc="https://via.placeholder.com/400x300"
              buttonCaption="Contact Us"
              imagePosition="right"
            />
        </>
    )
}

export default PropertyItem;