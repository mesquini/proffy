import React, { useCallback, useState } from "react";

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from "./styles";

import heartOutlineIcon from "../../assets/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/icons/unfavorite.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import { Image, Linking, AsyncStorage } from "react-native";
import { ITeacherItem } from "../../pages/TeacherList";
import api from "../../services/api";

interface IProps {
  teacher: ITeacherItem;
  favorited: boolean;
}

const TeacherItem: React.FC<IProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleLinkWhatsapp = useCallback(() => {
    Linking.openURL(`whatsapp://send:?phone=${teacher.whatsapp}`);

    api.post("/connections", {
      user_id: teacher.id,
    });
  }, [Linking]);

  const handleTogglerFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];

    if (favorites) favoritesArray = JSON.parse(favorites);

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: ITeacherItem) => {
          return teacherItem.id === teacher.id;
        }
      );

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }, [isFavorited]);

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: teacher.avatar,
          }}
        />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {"    "}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>
      </Footer>

      <ButtonContainer>
        <FavoriteButton favorited={favorited} onPress={handleTogglerFavorite}>
          {isFavorited ? (
            <Image source={unfavoriteIcon} />
          ) : (
            <Image source={heartOutlineIcon} />
          )}
        </FavoriteButton>

        <ContactButton onPress={handleLinkWhatsapp}>
          <Image source={whatsappIcon} />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </ButtonContainer>
    </Container>
  );
};

export default TeacherItem;
