const getNftImage = async (imgIpfsLink, tokenId, format) => {
    // const token = await this.client.queryContractSmart(this.config.sg721, {
    //   nft_info: { token_id: tokenId },
    // });
    // console.log(token);
    const imgSrcURL = "https://ipfs.io/ipfs/"+imgIpfsLink+"/" + tokenId + format;

    // const response = await window.fetch(ipfsURL);
    // const data = await response.json();
    // console.log(data);
    // const imgSrc = ipfsURL(data.image);

    return imgSrcURL;
  };

  export {getNftImage};