import Orphanage from '../../entities/Orphanage';

export class FindOrphanagesView {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      whatsapp: orphanage.whatsapp,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: orphanage.images.map(image => {
        return {
          id: image.id,
          url: `http://192.168.0.16:3333/uploads/${image.path}`
        }
      })
    }
  }

  renderMany (orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage))
  }
}
