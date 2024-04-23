import * as SC from './styled';

import { useEffect, useState } from 'react';

const TermsAndConditions = (props: any) => {
  const currentDate = new Date();
  const currentDay = String(currentDate.getDate()).padStart(2, '0');
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
  const currentYear = String(currentDate.getFullYear());
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 5);
  const nextDay = String(nextDate.getDate()).padStart(2, '0');
  const nextMonth = String(nextDate.getMonth() + 1).padStart(2, '0');
  const nextYear = String(nextDate.getFullYear());

  const currentFormattedDate = `${currentDay}.${currentMonth}.${currentYear}`;
  const nextFormattedDate = `${nextDay}.${nextMonth}.${nextYear}`;

  const prizePrice = props.price !== undefined ? props.price : 99.00;
  const prizeTrialPrice = props.trialPrice !== undefined ? props.trialPrice : 1.00;

  const [data, setData] = useState({
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    const _preData = localStorage.getItem('prepareData');
    if (_preData) {
      const parsedObject = JSON.parse(_preData);
      setData(parsedObject);
    } else {
      console.log('PrepareData not found in storage');
    }
  }, []);

  return (
    <SC.TermsContainer>
      <SC.Header>
        <SC.Title>TERMS AND CONDITIONS OF THE CONTEST</SC.Title>
      </SC.Header>
      <SC.Body>
        <p>
          Before entering this contest, the Entrant must read and agree to these
          terms and conditions. By applying for access and or services from this
          website, the Entrant is agreeing to these terms and conditions and is
          agreeing to be legally bound by them.
        </p>
        <p>
          The following terms and conditions, together with any documents they
          expressly incorporate by reference (collectively, these “Terms and
          Conditions”), govern your access and use of the website, including any
          content, functionality and services offered on or through the Website,
          whether as a guest or a registered user. These Terms and Conditions
          apply to the Website, web pages, interactive features, applications,
          widgets, blogs, social networks, social network “tabs”, or other
          online or wireless offerings that post a link to these Terms and
          Conditions, whether accessed via computer, mobile device or other
          technology, manner or means.
        </p>
        <p>
          Please read the Terms and Conditions carefully before you start to use
          the Website. By using the Website or by clicking to accept or agree to
          the Terms and Conditions when this option is made available to you,
          you accept and agree to be bound and abide by these Terms and
          Conditions and our Privacy Policy.
        </p>
        <p>
          If you do not want to agree to these Terms and Conditions or the
          Privacy Policy, you must not access or use the Website.
        </p>
        <p>
          You consent to accept these Terms and Conditions electronically, and
          that the storage of records related to these Terms and Conditions will
          be made in electronic form.
        </p>
        <p>
          <strong>PREAMBLE:</strong>
        </p>
        <p>
          The Entrant data is for internal use only and will be treated
          confidentially.
        </p>
        <p>
          All questions will be answered within the maximum 48 hours term by our
          Customer Care team, sending us a message via this email:
          cs@99support.me.
        </p>
        <p>
          The Website may contain links to third party websites that are not
          owned or controlled by the Website. The Website has no control over
          and assumes no responsibility for, the content, privacy policies, or
          practices of any third-party websites. By using the Website, you
          expressly release it from all liability arising from your use of any
          third-party website.
        </p>
        <p>
          The Website is for your personal use and shall not be used for any
          commercial purpose except those specifically endorsed or approved by
          the Website.
        </p>
        <p>
          The website offers online entertainment services. You acknowledge that
          you are aware of the nature of the content provided by the Site, that
          you are not offended by such content and that you access the Site
          freely, voluntarily and willingly.
        </p>
        <p>
          <strong>DEFINITIONS:</strong>
        </p>
        <p>
          “The Entrant” shall mean the user of the services of the site and
          holder of a valid username and password for the Site.
        </p>
        <p>
          “Member” or “Membership,” shall mean the owner or user of a valid
          username and password for the site during the term of membership.
        </p>
        <p>
          “Website” or “Site” shall mean the website in which the visitor has a
          username and a password or which he or she visits or access its
          content and its materials and obtain the benefits of membership.
        </p>
        <p>
          “Access rights” shall mean the combination of unique username and
          password that is used to access the site. An access right is a license
          to use the Site for a period of time.
        </p>
        <p>
          <strong>AGE OF MAJORITY:</strong>
        </p>
        <p>
          You confirm that you are at least 18 years of age or the age of
          majority in the jurisdiction you are accessing the Website from, and
          are fully able and competent to enter into the terms, conditions,
          obligations, affirmations, representations, and warranties set forth
          in these Terms and Conditions, and to abide by and comply with these
          Terms and Conditions.
        </p>
        <p>
          <i>
            If you have not attained the Age of Majority, you must exit the
            website immediately and may not use or access all or any part of the
            Sites for for any reason.
          </i>
        </p>
        <p>
          <strong>CHANGES TO THE TERMS AND CONDITIONS:</strong>
        </p>
        <p>
          We may modify or revise these Terms and Conditions from time to time
          in our sole discretion and you agree to be bound by such modifications
          or revisions. Although we may attempt to notify you when major changes
          are made to these Terms and Conditions, you are expected to
          periodically review the most up-to-date version, so you are aware of
          any changes, as they are binding to you. If we change anything in
          these Terms and Conditions, the change will be reflected in the ” last
          modified date”. All changes are effective immediately when we post
          them and apply to all access to and use of the Website thereafter.
        </p>
        <p>
          <strong>ACCESSING THE WEBSITE AND ACCOUNT SECURITY:</strong>
        </p>
        <p>
          We reserve the right to withdraw or amend this Website, and any
          service or material provided on the Website, in our sole discretion
          without notice. We will not be liable if for any reason all or any
          part of the Website is unavailable at any time or for any period. From
          time to time, we may restrict access to some parts of the Website, or
          the entire Website, to users, including registered users.
        </p>
        <p>You are responsible for:</p>
        <ol>
          <li>
            making all arrangements necessary for you to have access to the
            Website;
          </li>
          <li>
            ensuring that all persons who access the Website through your
            internet connection are aware of these Terms and Conditions and
            comply with them;
          </li>
          <li>
            ensuring that all persons who access the Website through your
            internet connection are at least 18 years of age or the age of
            majority in the jurisdiction they are accessing the Website from.
          </li>
        </ol>
        <p>
          To access the Website or some of the resources it offers, you may be
          asked to provide certain registration details or other information. It
          is a condition of your use of the Website that all the information you
          provide on the Website is correct, current and complete. You agree
          that all information you provide to register with this Website or
          otherwise, including but not limited to through the use of any
          interactive features on the Website, is governed by our Privacy
          Policy, and you consent to all actions we take with regards to your
          information consistent with our Privacy Policy.
        </p>
        <p>
          If you choose or are provided with a username, password or any other
          piece of information as part of our security procedures, you must
          treat such information as confidential and you must not disclose it to
          any other person or entity and you are fully responsible for all
          activities that occur under your username or password. You agree to
          notify us immediately of any unauthorized access to or use of your
          username or password or any other breach of security by contacting us
          at the email: cs@99support.me.
        </p>
        <p>
          Although the Website will not be liable for your losses caused by any
          unauthorized use of your account, you may be liable for the losses of
          the Website or others due to such unauthorized use.
        </p>
        <p>
          If you interact with us or with third-party service providers, and you
          provide information, including account or credit card or other payment
          information, you agree that all information that you provide will be
          accurate, complete, and current.
        </p>
        <p>
          We have the right to disable any username, password or other
          identifiers, whether chosen by you or provided by us, at any time in
          our sole discretion for any or no reason, including if, in our
          opinion, you have violated any provision of these Terms and
          Conditions.
        </p>
        <p>
          We assure you, as our member, that we will process and protect your
          information and we will not make any information public. Naturally, we
          can not assume any responsibility if you on purpose, as a member or
          any visitor to our page, will make your personal data public.
        </p>
        <p>
          <strong>AUTHORISATION OF USE:</strong>
        </p>
        <p>
          Members of the Site are hereby authorized a single access right to
          access the service or materials located at this website. This access
          rights shall be granted for sole use to one Member.
        </p>
        <p>
          All memberships are provided for personal use and shall not be used
          for any commercial purposes or by any other third parties. Commercial
          use of either the Site or any material found within is strictly
          prohibited unless authorized by the website.
        </p>
        <p>
          No material within the Site may be transferred to any other person or
          entity, whether commercial or non-commercial. No material within the
          Site may be distributed through peer-to-peer networks or any other
          file-sharing platforms. In addition, materials may not be modified or
          altered. Materials may not be displayed publicly or used for any
          rental, sale, or display. Materials shall extend to copyright,
          trademarks, or other proprietary notices there from. The Website
          reserve the right to terminate this access right at any time if the
          terms of this agreement are breached. In the case that the terms are
          breached, the Member will be required to immediately destroy any
          information or material printed, downloaded or otherwise copied from
          the site.
        </p>
        <p>
          <strong>CONTEST DESCRIPTION:</strong>
        </p>
        <p>
          The Contest begins on {data.startDate || currentFormattedDate} and
          ends on {data.endDate || nextFormattedDate} (the ” Contest Period”).
        </p>
        <p>
          By participating to this Contest, each Entrant unconditionally accepts
          and agrees to comply with and abide by these Official Rules and the
          decisions of Website, which shall be final and binding in all
          respects.
        </p>
        <p>
          The Sponsor is responsible for the collection, submission or
          processing of Entries and the overall administration of the Contest.
          Entrants should look solely to Website with any questions, comments or
          problems related to the Contest.
        </p>
        <p>
          Website may be reached by email at cs@99support.me during the Contest
          Period.
        </p>
        <p>
          <strong>PRIZE:</strong>
        </p>
        <p>
          The prize (different for every offer) is the one displayed on the
          landing page and on the contest participation form (e.g. phones,
          gaming consoles, tablets or subscriptions to various sites /
          platforms)
        </p>
        <p>
          The prize consists of 1 (one) product/service (approximate retail
          value or “ARV”: 500-1500 Euro). Alternatively, because we want you to
          be truly unique, depending on your wishes, we can offer you another
          prize whose ARV cannot exceed the one mentioned above. For example,
          you can choose a Vacation, a Samsung Galaxy S10, a KitchenAid robot,
          but surely you know your wishes best, so feel free.
        </p>
        <p>
          The Website gives only one prize for only one winner, during the
          present Contest. Prize cannot be transferred. In case of disagreement
          between the parties (on the prize) of this contract the Website
          reserves the right in its sole and absolute discretion to award a
          substitute prize of equal or greater value if a prize described in
          these Terms and Conditions is unavailable or cannot be awarded, in
          whole or in part, for any reason. The ARV of the prize represents
          Website’s good faith determination, at the start of the Contest.
        </p>
        <p>
          That determination is final and binding and cannot be appealed. If the
          actual value of the prize turns out to be less than the stated ARV,
          the difference will not be awarded in cash.
        </p>
        <p>
          The Website makes no representation or warranty concerning the
          appearance, safety or performance of any prize awarded. The Website
          will not replace any lost or stolen prize items. This Contest is open
          to legal residents of the country where the contest takes place and
          Prize will only be awarded and/or delivered to addresses within said
          location as declared by the Entrant. All local taxes, fees, and
          surcharges, except courier taxes for delivering the Prize, are the
          sole responsibility of the prize winner. Failure to comply with these
          Terms and Conditions will result in loss of the prize.
        </p>
        <p>
          <strong>CONTEST ELIGIBILITY:</strong>
        </p>
        <p>
          The Contest is open for any/all legal residents in the country where
          the contest takes place, who are at least 18 years old or of the
          equivalent age of majority in the relevant country (The Entrant”).
        </p>
        <p>
          In order to participate at the Contest the Entrant declares and
          assumes that is a real one, is not using a robotic entry who attempts
          to increase their winning chance.
        </p>
        <p>
          The contest does not require any purchase to participate. All contest
          participants will be enrolled in a 1-day trial to one of our partner
          programs’ membership websites. The trial has an upfront cost as well
          as a monthly membership cost if it is not canceled. If you do not wish
          to enroll in a 1-day trial to one of our partner programs, you can
          participate in the contest via a free postal entry route. Email
          cs@99support.me for more information on the postal entry.&nbsp;
        </p>
        <p>
          FOR EU BASED ENTRANTS: The Entrant proves his/her identity by
          declaring a VALID e-mail address, filling-in all the fields with VALID
          information and use a VALID credit card or IBAN, from which will be
          deducted the initial amount of {prizeTrialPrice}€ (as 1-say trial subscription
          entry fee) and, at the end of the trial period, the amount {prizePrice}€ (as
          monthly membership fee to our partner program) will be deducted
          monthly until canceled.
        </p>
        <p>
          FOR UK BASED ENTRANTS: The Entrant proves his/her identity by
          declaring a VALID e-mail address, filling-in all the fields with VALID
          information and use a VALID credit card or IBAN or bank account/sort
          code, from which will be deducted the initial amount of {prizeTrialPrice}GBP (as
          1-day trial subscription entry fee) and, at the end of the trial
          period, the amount {prizePrice}GBP (as monthly membership fee to our partner
          program) will be deducted monthly until canceled.
        </p>
        <p>
          FOR US BASED ENTRANTS: The Entrant proves his/her identity by
          declaring a VALID e-mail address, filling-in all the fields with VALID
          information and use a VALID credit card or bank account, from which
          will be deducted the initial amount of {prizeTrialPrice}USD (as 1-day trial
          subscription entry fee) and, at the end of the trial period, the
          amount {prizePrice}USD (as monthly membership fee to our partner program)
          will be deducted monthly until canceled.
        </p>
        <p>
          FOR CANADA BASED ENTRANTS: The Entrant proves his/her identity by
          declaring a VALID e-mail address, filling-in all the fields with VALID
          information and use a VALID credit card or bank account, from which
          will be deducted the initial amount of {prizeTrialPrice}CAD (as 1-day trial
          subscription entry fee) and, at the end of the trial period, the
          amount {prizePrice}CAD (as monthly membership fee to our partner program)
          will be deducted monthly until canceled.
        </p>
        <p>
          FOR AUSTRALIA BASED ENTRANTS: The Entrant proves his/her identity by
          declaring a VALID e-mail address, filling-in all the fields with VALID
          information and use a VALID credit card or bank account, from which
          will be deducted the initial amount of {prizeTrialPrice}AUD (as 1-day trial
          subscription entry fee) and, at the end of the trial period, the
          amount {prizePrice}AUD (as monthly membership fee to our partner program)
          will be deducted monthly until canceled
        </p>
        <p>
          The Website does not take any liability regarding the validity of any
          aspect related to the email address and any other information provided
          by the Entrant.
        </p>
        <p>
          Website, subsidiaries, affiliates, distributors, retailers, sales
          representatives, advertising and promotion agencies and each of their
          respective officers, directors and employees are ineligible to enter
          the Contest.
        </p>
        <p>
          The Entrants shall subscribe to the Contest starting with 01.02.2023
          until 28.02.2023 included (Entrance Period) by filling in the Entry
          form. Automated or robotic entries submitted by individuals or
          organizations will be disqualified. Website’s database clock will be
          the official timekeeper for this Contest.
        </p>
        <p>
          If all these conditions are met, the Entrant is automatically added on
          the list along with the other valid Entrants.
        </p>
        <p>
          <strong>WINNER SELECTION:</strong>
        </p>
        <p>
          The random drawing will be conducted by electronic methods between the
          5th – 10th day of the month following the expiry of the contest
          (Winner Selection Period) by the website or its designated
          representatives
        </p>
        <p>
          The Winner of the Contest will be selected in a first random drawing
          from among all eligible Entrants received throughout the Entering
          Period. After, in the second and third random drawing, shall be
          selected 2 (two) other potential winners, from among all eligible
          Entrants received throughout the Entering Period, this 2 (two) other
          potential winners shall be entitled to the prize only if the first
          selected winner does not fulfill the full subscription condition or
          not confirm the Website notification mentioned below. The 2 (two)
          other potential winners have priority to the prize, according to their
          random drawing selection order.
        </p>
        <p>
          Winner will be notified by email at the email address provided in the
          Entry Information in the next 10 (ten) business days after the Winner
          Selection Period. The Website does not take any liability regarding
          any aspect related to the email address provided by the Entrant.
        </p>
        <p>
          The Winner must accept the prize by email as directed by the website
          within 10 (ten) business days from the notification. Website is not
          responsible for any delay or failure to receive notification for any
          reason, including inactive email account(s), technical difficulties
          associated therewith, or Winner’s failure to adequately monitor any
          email account.
        </p>
        <p>
          Any winner notification not replied to or returned as undeliverable
          will result in prize forfeiture. In this case the 2 (two) other
          potential winners will be entitled to prize procedure.
        </p>
        <p>
          The winner may be required to sign and return an affidavit of
          eligibility and release of liability and a Publicity Release.
        </p>
        <p>
          <strong>DISCLAIMER:</strong>
        </p>
        <p>
          &nbsp; The member understands that the Website cannot and does not
          guarantee or warrant that files available for downloading from the
          Internet will be free of viruses, worms, trojan horses or other code
          that may manifest contaminating or destructive properties. Member is
          responsible for implementing sufficient procedures and checkpoints to
          satisfy his/her own particular requirements for accuracy of data input
          and output, and for maintaining a mean external to the site for the
          recovery of any lost data. Site does not assume any responsibility or
          risk for Member`s use of the Internet. However, in the event Site
          learns of such a breach, Site will notify Member so that Member can
          take the necessary precautions.
        </p>
        <p>
          Members use of the Site is at their own risk and the content is
          provided as it is – without warranties of any kind, either expressed
          or implied. Site disclaims all warranties including any implied
          warranties of merchantability, fit for a particular purpose, title or
          non-infringement. Site does not warrant that the functions or content
          contained in the Site will be uninterrupted or error-free, that
          failures will be corrected, or that the Site or the server that makes
          it available are free of viruses or other harmful components.
        </p>
        <p>
          The Site does not warrant or make any representation regarding use, or
          the result of use, of the content in terms of accuracy, reliability,
          or otherwise. The content may include technical inaccuracies or
          typographical errors, and the Site may make changes or improvements at
          any time. The Site does not warrant or make any representations
          regarding the appropriateness of the material or content or the
          authorization for use in all countries, states, provinces, counties or
          any other jurisdictions. If Member chooses to access the Site, Member
          does so at its own risk and subject to the laws in its own
          jurisdiction. Member is solely responsible for compliance with all
          applicable laws.
        </p>
        <p>The Website assumes no responsibility or liability for:</p>
        <ol>
          <li>
            any incorrect or inaccurate entry information, or for any faulty or
            failed electronic data transmissions;
          </li>
          <li>
            any unauthorized access to, or theft, destruction or alteration of
            entries at any point in the operation of this Contest;
          </li>
          <li>
            any technical malfunction, failure, error, omission, interruption,
            deletion, defect, delay in operation or communications line failure,
            regardless of cause, with regard to any equipment, systems,
            networks, lines, satellites, servers, camera, computers or providers
            utilized in any aspect of the operation of the Contest;
          </li>
          <li>
            inaccessibility or unavailability of any network or wireless
            service, the Internet or website or any combination thereof;
          </li>
          <li>
            suspended or discontinued Internet, wireless or landline phone
            service; or
          </li>
          <li>
            any injury or damage to participant’s or to any other person’s
            computer or mobile device which may be related to or resulting from
            any attempt to participate in the Contest or download of any
            materials in the Contest.
          </li>
        </ol>
        <p>
          If, for any reason, the Contest is unable to run as planned for
          reasons which may include without limitation, infection by computer
          virus, tampering, unauthorized intervention, fraud, technical
          failures, or any other causes which may corrupt or affect the
          administration, security, fairness, integrity or proper conduct of
          this Contest, the Website reserves the right at its sole discretion to
          cancel, terminate, modify or suspend the Contest in whole or in part,
          at his discretion at that moment.
        </p>
        <p>
          <strong>CONTEST PRIVACY:</strong>
        </p>
        <p>
          Any personal information supplied by the Entrant will be subject to
          the privacy policy of the Website. By entering the Contest, the
          Entrant grants Website permission to share his email address and any
          other personally identifiable information with the other Entities for
          the purpose of administration and prize fulfillment, including use in
          a publicly available Winners list posted on the Website website.
        </p>
        <p>
          <strong>NOTICE:</strong>
        </p>
        <p style={{ marginBottom: '10px' }}>
          All questions regarding these terms and conditions must be directed to
          our Customer Support team at: cs@99support.me.
        </p>
      </SC.Body>
      <SC.Footer>
        <button onClick={props.toggle}>Close</button>
      </SC.Footer>
    </SC.TermsContainer>
  );
};

export default TermsAndConditions;